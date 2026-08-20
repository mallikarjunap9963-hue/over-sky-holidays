import { apiClient } from './apiClient';
import type { ApiBlog, ApiBlogDetailResponse } from './types';
import { mapBlogFromApi } from './mappers';

export const blogsApi = {
  // List published travel blogs
  async getBlogs(params?: {
    category?: string;
    search?: string;
    per_page?: number;
    page?: number;
  }): Promise<{ blogs: ReturnType<typeof mapBlogFromApi>[]; raw: ApiBlog[]; isLive: boolean }> {
    const res = await apiClient.get<ApiBlog[]>('/blogs', params);
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      const mapped = res.data.map(mapBlogFromApi);
      return { blogs: mapped, raw: res.data, isLive: true };
    }
    return { blogs: [], raw: [], isLive: false };
  },

  // Get single blog details by slug or ID
  async getBlogBySlug(slug: string): Promise<{
    blog: ReturnType<typeof mapBlogFromApi> | null;
    recentBlogs: ReturnType<typeof mapBlogFromApi>[];
    relatedBlogs: ReturnType<typeof mapBlogFromApi>[];
    previousBlog: ReturnType<typeof mapBlogFromApi> | null;
    nextBlog: ReturnType<typeof mapBlogFromApi> | null;
    isLive: boolean;
  }> {
    const res = await apiClient.get<ApiBlogDetailResponse>(`/blogs/${encodeURIComponent(slug)}`);

    // The backend returns `{ success: true, blog: { ... }, recent_blogs: [...], related_blogs: [...] }`
    // or sometimes `{ data: { ... } }` or `{ blog: { ... } }`
    const rawBlog = (res as any).blog || (res.data as any)?.blog || res.data;

    const rawRes = res as any;
    if (res.success && rawBlog && rawBlog.title) {
      const mappedBlog = mapBlogFromApi(rawBlog);
      const recent = (rawRes.recent_blogs || rawRes.data?.recent_blogs || []).map(mapBlogFromApi);
      const related = (rawRes.related_blogs || rawRes.data?.related_blogs || []).map(mapBlogFromApi);
      const prev = rawRes.previous_blog ? mapBlogFromApi(rawRes.previous_blog) : null;
      const next = rawRes.next_blog ? mapBlogFromApi(rawRes.next_blog) : null;


      return {
        blog: mappedBlog,
        recentBlogs: recent,
        relatedBlogs: related,
        previousBlog: prev,
        nextBlog: next,
        isLive: true,
      };
    }

    return {
      blog: null,
      recentBlogs: [],
      relatedBlogs: [],
      previousBlog: null,
      nextBlog: null,
      isLive: false,
    };
  },
};
