import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const GLOBAL_IMAGE_QUALITY = 30;
const GLOBAL_IMAGE_FORMAT = 'webp';

/**
 * Optimizes an image using the project's global quality and format settings.
 * @param src The source image (imported ImageMetadata)
 * @param options Additional options to override defaults (optional)
 */
export async function getOptimizedImage(src: ImageMetadata, options: Record<string, any> = {}) {
  return await getImage({
    src,
    format: GLOBAL_IMAGE_FORMAT,
    quality: GLOBAL_IMAGE_QUALITY,
    ...options,
  });
}
