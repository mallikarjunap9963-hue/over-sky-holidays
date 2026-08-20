import { Router } from 'express';
import { serviceController } from '../controllers/service.controller.js';

const router = Router();

// GET /api/services - List active services
router.get('/', serviceController.getServices.bind(serviceController));

// GET /api/services/:id - Get service details by ID
router.get('/:id', serviceController.getServiceById.bind(serviceController));

export default router;
