const BACKEND_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.openskyholidays.com';

/**
 * Format media/image URL from backend.
 * Handles absolute URLs, relative storage paths, and fallback images.
 */
export function formatImageUrl(url?: string | null, fallback: string = ''): string {
  if (!url || typeof url !== 'string') {
    return fallback;
  }

  const trimmed = url.trim();
  if (!trimmed) {
    return fallback;
  }

  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  if (trimmed.startsWith('data:')) {
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
