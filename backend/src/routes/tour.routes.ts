import { Router } from 'express';
import { tourController } from '../controllers/tour.controller.js';

const router = Router();

// GET /api/tours/search - Search tours
router.get('/search', tourController.searchTours.bind(tourController));

// GET /api/tours/types - List tour categories
router.get('/types', tourController.getTourTypes.bind(tourController));

// GET /api/tours/details - List all tour details
router.get('/details', tourController.getTourDetails.bind(tourController));

// GET /api/tours/features - List all tour features
router.get('/features', tourController.getTourFeatures.bind(tourController));

// GET /api/tours - List all tours (paginated & filtered)
router.get('/', tourController.getTours.bind(tourController));

// GET /api/tours/:id - Get tour by ID
router.get('/:id', tourController.getTourById.bind(tourController));

export default router;
