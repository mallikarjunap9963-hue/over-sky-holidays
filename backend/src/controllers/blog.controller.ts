import { Request, Response, NextFunction } from 'express';
import { openSkyService } from '../services/opensky.service.js';

export class BlogController {
  async getBlogs(req: Request, res: Response, next: NextFunction) {
    try {
      const { category, search, per_page, page } = req.query;
      const data = await openSkyService.getBlogs({
        category: category ? String(category) : undefined,
        search: search ? String(search) : undefined,
        per_page: per_page ? parseInt(String(per_page), 10) : undefined,
        page: page ? parseInt(String(page), 10) : undefined,
      });

      return res.json({
        success: true,
        data: data.data || data,
        meta: data.meta,
      });
    } catch (error) {
      next(error);
    }
  }

  async getBlogBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params.slug);
      const data = await openSkyService.getBlogBySlug(slug);

      return res.json({
        success: true,
        data: data.blog || (data as any).data || data,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const blogController = new BlogController();
