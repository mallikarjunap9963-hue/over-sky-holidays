import { apiClient } from './apiClient';
import { blogPosts } from '../data';

export const blogService = {
  async getBlogs(params?: { category?: string; search?: string; per_page?: number }) {
    const res = await apiClient.get('/blogs', params);
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return {
        blogs: res.data.map((b: any) => ({
          id: b.id,
          title: b.title,
          slug: b.slug,
          excerpt: b.short_description || b.content?.substring(0, 150) + '...',
          content: b.content,
          image: b.image_url || b.image || blogPosts[0]?.imageUrl || '',
          imageUrl: b.image_url || b.image || blogPosts[0]?.imageUrl || '',
          date: b.created_at ? new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
          author: b.author_name || 'Travel Expert',
          category: b.category_name || 'Destination Guide',
        })),
        isLive: true,
      };
    }
    return { blogs: blogPosts, isLive: false };
  },

  async getBlogBySlugOrId(identifier: string | number) {
    const res = await apiClient.get(`/blogs/${identifier}`);
    if (res.success && res.data) {
      const b = res.data;
      return {
        blog: {
          id: b.id,
          title: b.title,
          slug: b.slug,
          excerpt: b.short_description || b.content?.substring(0, 150) + '...',
          content: b.content,
          image: b.image_url || b.image || blogPosts[0]?.imageUrl || '',
          imageUrl: b.image_url || b.image || blogPosts[0]?.imageUrl || '',
          date: b.created_at ? new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
          author: b.author_name || 'Travel Expert',
          category: b.category_name || 'Destination Guide',
        },
        isLive: true,
      };
    }

    const fallback = blogPosts.find((p: any) => p.id === Number(identifier) || p.slug === String(identifier));
    return { blog: fallback || null, isLive: false };
  },
};
