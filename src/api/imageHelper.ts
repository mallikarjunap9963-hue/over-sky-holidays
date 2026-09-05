const BACKEND_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.openskyholidays.com';

/**
 * Format media/image URL from backend.
 * Handles absolute URLs, relative storage paths, and fallback images.
 */
export function formatImageUrl(url?: any, fallback: string = ''): string {
  if (!url) {
    return fallback;
  }

  // Handle object format e.g. { url: "...", path: "..." }
  if (typeof url === 'object') {
    const extracted = url.url || url.image_url || url.image || url.path;
    if (!extracted || typeof extracted !== 'string') {
      return fallback;
    }
    url = extracted;
  }

  if (typeof url !== 'string') {
    return fallback;
  }

  const trimmed = url.trim();
  if (!trimmed) {
    return fallback;
  }

  // Full URL
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  // Data or blob URLs
  if (trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed;
  }

  // Local frontend assets (Vite dev & prod bundles)
  if (
    trimmed.startsWith('/src/') ||
    trimmed.startsWith('/assets/') ||
    trimmed.startsWith('/@') ||
    trimmed.includes('/assets/')
  ) {
    return trimmed;
  }

  const cleanBase = BACKEND_BASE_URL.replace(/\/+$/, '');

  if (trimmed.startsWith('/storage/')) {
    return `${cleanBase}${trimmed}`;
  }

  if (trimmed.startsWith('storage/')) {
    return `${cleanBase}/${trimmed}`;
  }

  if (trimmed.startsWith('/media/')) {
    return `${cleanBase}${trimmed}`;
  }

  if (trimmed.startsWith('media/')) {
    return `${cleanBase}/${trimmed}`;
  }

  if (trimmed.startsWith('/')) {
    return `${cleanBase}${trimmed}`;
  }

  // General storage asset relative path
  return `${cleanBase}/storage/${trimmed}`;
}
