import axios from 'axios';
import { config } from '../config/env.js';
export class OpenSkyService {
    client;
    constructor() {
        const headers = {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            Referer: 'https://api.openskyholidays.com/api/docs',
        };
        // Add API Key if configured
        if (config.opensky.apiKey) {
            headers['X-API-KEY'] = config.opensky.apiKey;
            headers['Authorization'] = `Bearer ${config.opensky.apiKey}`;
        }
        // Add Basic Auth if configured
        let auth = undefined;
        if (config.opensky.username && config.opensky.password) {
            auth = {
                username: config.opensky.username,
                password: config.opensky.password,
            };
        }
        this.client = axios.create({
            baseURL: `${config.opensky.baseUrl}/api`,
            timeout: config.opensky.timeoutMs,
            headers,
            auth,
        });
        // Request Logging (Sanitized)
        this.client.interceptors.request.use((reqConfig) => {
            if (config.nodeEnv === 'development') {
                const method = reqConfig.method?.toUpperCase();
                const url = reqConfig.url;
                console.log(`[OpenSky API Req] ${method} ${url}`);
            }
            return reqConfig;
        });
        // Response Logging & Error Mapping
        this.client.interceptors.response.use((response) => {
            if (config.nodeEnv === 'development') {
                console.log(`[OpenSky API Res] ${response.status} ${response.config.url}`);
            }
            return response;
        }, (error) => {
            const url = error.config?.url;
            const status = error.response?.status || 500;
            const msg = error.response?.data?.message || error.message || 'External provider error';
            console.error(`[OpenSky API Error] ${status} ${url} - ${msg}`);
            return Promise.reject(this.normalizeError(error));
        });
    }
    normalizeError(error) {
        if (error.response) {
            const { status, data } = error.response;
            let message = 'Provider service error';
            let code = 'PROVIDER_ERROR';
            if (status === 400) {
                message = data?.message || 'Invalid request parameters';
                code = 'BAD_REQUEST';
            }
            else if (status === 401) {
                message = 'Authentication failed with provider';
                code = 'UNAUTHORIZED';
            }
            else if (status === 403) {
                message = 'Access denied by provider';
                code = 'FORBIDDEN';
            }
            else if (status === 404) {
                message = data?.message || 'Requested resource not found on provider';
                code = 'NOT_FOUND';
            }
            else if (status === 422) {
                message = data?.message || 'Validation error on provider';
                code = 'VALIDATION_ERROR';
            }
            else if (status === 429) {
                message = 'Too many requests to provider. Please try again shortly.';
                code = 'RATE_LIMITED';
            }
            else if (status >= 500) {
                message = 'Provider service is temporarily unavailable';
                code = 'PROVIDER_SERVER_ERROR';
            }
            return {
                status,
                message,
                code,
                errors: data?.errors,
            };
        }
        if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
            return {
                status: 504,
                message: 'External provider request timed out. Please try again.',
                code: 'TIMEOUT',
            };
        }
        return {
            status: 500,
            message: 'Failed to communicate with OpenSky provider',
            code: 'NETWORK_ERROR',
        };
    }
    // Generic request wrapper
    async request(config) {
        const response = await this.client.request(config);
        return response.data;
    }
    // ================= TOURS =================
    async getTours(params) {
        return this.request({
            method: 'GET',
            url: '/tours',
            params,
        });
    }
    async getTourById(id) {
        return this.request({
            method: 'GET',
            url: `/tours/${id}`,
        });
    }
    async getTourTypes() {
        return this.request({
            method: 'GET',
            url: '/tour-types',
        });
    }
    async getTourDetails() {
        return this.request({
            method: 'GET',
            url: '/tour-details',
        });
    }
    async getTourDetailById(id) {
        return this.request({
            method: 'GET',
            url: `/tour-details/${id}`,
        });
    }
    async getTourFeatures() {
        return this.request({
            method: 'GET',
            url: '/tour-features',
        });
    }
    // ================= INQUIRIES & BOOKINGS =================
    async submitTourInquiry(data) {
        return this.request({
            method: 'POST',
            url: '/tour-inquiries',
            data,
        });
    }
    async submitEnquiry(data) {
        return this.request({
            method: 'POST',
            url: '/enquiries',
            data,
        });
    }
    // ================= SERVICES =================
    async getServices() {
        return this.request({
            method: 'GET',
            url: '/services',
        });
    }
    async getServiceById(id) {
        return this.request({
            method: 'GET',
            url: `/services/${id}`,
        });
    }
    // ================= BLOGS =================
    async getBlogs(params) {
        return this.request({
            method: 'GET',
            url: '/blogs',
            params,
        });
    }
    async getBlogBySlug(slug) {
        return this.request({
            method: 'GET',
            url: `/blogs/${slug}`,
        });
    }
    // ================= HERO & CONTENT =================
    async getHeroes() {
        return this.request({
            method: 'GET',
            url: '/heroes',
        });
    }
    async getTestimonials() {
        return this.request({
            method: 'GET',
            url: '/testimonials',
        });
    }
    async getTestimonialById(id) {
        return this.request({
            method: 'GET',
            url: `/testimonials/${id}`,
        });
    }
    async getOfferBanners() {
        return this.request({
            method: 'GET',
            url: '/offer-banners',
        });
    }
    async getPageBanners(page) {
        const url = page ? `/page-banners/page/${encodeURIComponent(page)}` : '/page-banners';
        return this.request({
            method: 'GET',
            url,
        });
    }
    async getAdventures(params) {
        return this.request({
            method: 'GET',
            url: '/adventures',
            params,
        });
    }
    async getAdventureCategories() {
        return this.request({
            method: 'GET',
            url: '/adventure-categories',
        });
    }
    async getAdventureByCategory(slug) {
        return this.request({
            method: 'GET',
            url: `/adventures/category/${encodeURIComponent(slug)}`,
        });
    }
    // ================= ABOUT & PROCESS =================
    async getAboutSectionActive() {
        return this.request({
            method: 'GET',
            url: '/about-section/active',
        });
    }
    async getWhyChooseSectionsActive() {
        return this.request({
            method: 'GET',
            url: '/why-choose-sections/active',
        });
    }
    async getTravelSupportActive() {
        return this.request({
            method: 'GET',
            url: '/travel-support/active',
        });
    }
    async getOurProcessesActive() {
        return this.request({
            method: 'GET',
            url: '/our-processes/active',
        });
    }
    async getCounters() {
        return this.request({
            method: 'GET',
            url: '/counters',
        });
    }
    async getCoreValues() {
        return this.request({
            method: 'GET',
            url: '/core-values',
        });
    }
}
// Export singleton instance
export const openSkyService = new OpenSkyService();
