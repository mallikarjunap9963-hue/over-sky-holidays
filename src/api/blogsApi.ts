import { apiClient } from './apiClient';
import type { ApiBlog, ApiBlogDetailResponse } from './types';
import { mapBlogFromApi } from './mappers';

function isBlogActive(b: any): boolean {
  if (!b) return false;
  if (b.status !== undefined && b.status !== null) {
    if (typeof b.status === 'boolean') return b.status;
    if (typeof b.status === 'string') {
      const s = b.status.toLowerCase().trim();
      return !['inactive', 'draft', 'archived', 'disabled', '0', 'false'].includes(s);
    }
    if (typeof b.status === 'number') return b.status === 1;
  }
  if (b.is_active !== undefined && b.is_active !== null) return Boolean(b.is_active);
  if (b.published !== undefined && b.published !== null) return Boolean(b.published);
  if (b.is_published !== undefined && b.is_published !== null) return Boolean(b.is_published);
  return true;
}

function sortBlogsNewestFirst(blogs: ApiBlog[]): ApiBlog[] {
  return [...blogs].sort((a, b) => {
    const timeA = new Date(a.published_at || a.published_date || a.created_at || 0).getTime();
    const timeB = new Date(b.published_at || b.published_date || b.created_at || 0).getTime();
    const validA = isNaN(timeA) ? 0 : timeA;
    const validB = isNaN(timeB) ? 0 : timeB;
    return validB - validA;
  });
}

function extractRawBlogList(res: any): ApiBlog[] {
  if (!res) return [];
  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res)) return res;
  if (res.data && Array.isArray(res.data.data)) return res.data.data;
  return [];
}

export const blogsApi = {
  // Single-page list of blogs
  async getBlogs(params?: {
    category?: string;
    search?: string;
    per_page?: number;
    page?: number;
  }): Promise<{
    blogs: ReturnType<typeof mapBlogFromApi>[];
    raw: ApiBlog[];
    meta: { current_page: number; last_page: number; total: number; per_page: number };
    isLive: boolean;
  }> {
    const res = await apiClient.get<any>('/blogs', params);
    const rawList = extractRawBlogList(res);
    const metaObj = (res as any).meta || {};
    const meta = {
      current_page: metaObj.current_page || (res as any).current_page || 1,
      last_page: metaObj.last_page || (res as any).last_page || 1,
      total: metaObj.total || (res as any).total || rawList.length,
      per_page: metaObj.per_page || (res as any).per_page || rawList.length,
    };

    if (rawList.length > 0) {
      const activeOnly = rawList.filter(isBlogActive);
      const sorted = sortBlogsNewestFirst(activeOnly);
      const mapped = sorted.map(mapBlogFromApi);
      return { blogs: mapped, raw: sorted, meta, isLive: true };
    }

    return { blogs: [], raw: [], meta, isLive: Boolean(res.success) };
  },

  // Multi-page fetcher: fetches all pages until last_page, combines, deduplicates, and returns complete array
  async getAllBlogs(params?: {
    category?: string;
    search?: string;
  }): Promise<{
    blogs: ReturnType<typeof mapBlogFromApi>[];
    raw: ApiBlog[];
    total: number;
    isLive: boolean;
  }> {
    try {
      const pageSize = 24;
      const page1Res = await apiClient.get<any>('/blogs', { ...params, page: 1, per_page: pageSize });
      const page1Raw = extractRawBlogList(page1Res);
      const lastPage = (page1Res as any).meta?.last_page || (page1Res as any).last_page || 1;

      const allRaw: ApiBlog[] = [...page1Raw];

      // If more than 1 page exists, concurrently fetch remaining pages
      if (lastPage > 1) {
        const fetchPromises: Promise<any>[] = [];
        for (let p = 2; p <= lastPage; p++) {
          fetchPromises.push(
            apiClient.get<any>('/blogs', { ...params, page: p, per_page: pageSize })
          );
        }

        const remainingResponses = await Promise.all(fetchPromises);
        for (const resp of remainingResponses) {
          const pageRaw = extractRawBlogList(resp);
          allRaw.push(...pageRaw);
        }
      }

      // Deduplicate by ID or slug
      const seen = new Set<string | number>();
      const uniqueRaw = allRaw.filter((b) => {
        const key = b.id ?? b.slug;
        if (key === undefined || key === null) return true;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

      // Filter active/published only
      const activeBlogs = uniqueRaw.filter(isBlogActive);

      // Sort newest published first
      const sortedBlogs = sortBlogsNewestFirst(activeBlogs);

      const mapped = sortedBlogs.map(mapBlogFromApi);
      return {
        blogs: mapped,
        raw: sortedBlogs,
        total: sortedBlogs.length,
        isLive: true,
      };
    } catch (err) {
      console.error('[blogsApi.getAllBlogs] Failed to load all blogs:', err);
      return { blogs: [], raw: [], total: 0, isLive: false };
    }
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
