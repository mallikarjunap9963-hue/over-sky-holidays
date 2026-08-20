import { Router } from 'express';
import { blogController } from '../controllers/blog.controller.js';
const router = Router();
// GET /api/blogs - List blogs (supports ?category, ?search, ?per_page, ?page)
router.get('/', blogController.getBlogs.bind(blogController));
// GET /api/blogs/:slug - Get blog details by slug
router.get('/:slug', blogController.getBlogBySlug.bind(blogController));
export default router;
