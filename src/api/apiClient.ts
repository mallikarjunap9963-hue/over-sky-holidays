import type { ApiResponse } from './types';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://api.openskyholidays.com').replace(/\/+$/, '');

class ApiClient {
  private getFullUrl(endpoint: string, params?: Record<string, any>): string {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    // If endpoint doesn't start with /api, prefix with /api
    const apiPath = cleanEndpoint.startsWith('/api') ? cleanEndpoint : `/api${cleanEndpoint}`;
    let url = `${API_BASE_URL}${apiPath}`;

    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          searchParams.append(key, String(val));
        }
      });
      const qs = searchParams.toString();
      if (qs) {
        url += (url.includes('?') ? '&' : '?') + qs;
      }
    }
    return url;
  }

  private async request<T = any>(
    url: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...(options.headers as Record<string, string>),
    };

    try {
      const res = await fetch(url, {
        ...options,
        headers,
      });

      const isJson = res.headers.get('content-type')?.includes('application/json');
      const json = isJson ? await res.json().catch(() => null) : null;

      if (!res.ok) {
        let errorMessage = `Request failed with status ${res.status}`;
        if (json?.message) {
          errorMessage = json.message;
        } else if (json?.error) {
          errorMessage = typeof json.error === 'string' ? json.error : JSON.stringify(json.error);
        }

        return {
          success: false,
          status: false,
          message: errorMessage,
          errors: json?.errors,
        };
      }

      if (json !== null && typeof json === 'object') {
        return {
          success: json.success !== undefined ? json.success : true,
          status: json.status !== undefined ? json.status : true,
          ...json,
        };
      }

      return {
        success: true,
        status: true,
        data: json as T,
      };
    } catch (err: any) {
      console.warn(`[ApiClient] Network request failed for ${url}:`, err);
      return {
        success: false,
        status: false,
        message: err.message || 'Unable to connect to backend server. Please check your network connection.',
      };
    }
  }

  get<T = any>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = this.getFullUrl(endpoint, params);
    return this.request<T>(url, { method: 'GET' });
  }

  post<T = any>(endpoint: string, body?: any): Promise<ApiResponse<T>> {
    const url = this.getFullUrl(endpoint);
    return this.request<T>(url, {
      method: 'POST',
      body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
    });
  }

  put<T = any>(endpoint: string, body?: any): Promise<ApiResponse<T>> {
    const url = this.getFullUrl(endpoint);
    return this.request<T>(url, {
      method: 'PUT',
      body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
    });
  }

  delete<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    const url = this.getFullUrl(endpoint);
    return this.request<T>(url, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new ApiClient();
export { API_BASE_URL };
