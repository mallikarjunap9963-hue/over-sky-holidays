// Frontend API Client - calls backend `/api` proxy
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: any;
  errors?: string[] | Record<string, string[]>;
  bookingReference?: string;
  bookingId?: string;
  count?: number;
}

const API_BASE = '/api';

class ApiClient {
  private async request<T = any>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options.headers as Record<string, string>),
    };

    try {
      const res = await fetch(url, {
        ...options,
        headers,
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        return {
          success: false,
          message: json?.message || `Request failed with status ${res.status}`,
          errors: json?.errors,
        };
      }

      return json || { success: true };
    } catch (err: any) {
      console.warn(`[ApiClient] Network request failed for ${url}:`, err);
      return {
        success: false,
        message: err.message || 'Unable to connect to backend server',
      };
    }
  }

  get<T = any>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    let url = endpoint;
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
    return this.request<T>(url, { method: 'GET' });
  }

  post<T = any>(endpoint: string, body?: any): Promise<ApiResponse<T>> {
    return this.request<T>(urlFormatted(endpoint), {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  put<T = any>(endpoint: string, body?: any): Promise<ApiResponse<T>> {
    return this.request<T>(urlFormatted(endpoint), {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  delete<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(urlFormatted(endpoint), {
      method: 'DELETE',
    });
  }
}

function urlFormatted(ep: string) {
  return ep.startsWith('/') ? ep : `/${ep}`;
}

export const apiClient = new ApiClient();
