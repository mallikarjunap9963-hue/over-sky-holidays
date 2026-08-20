import { Router } from 'express';
import tourRoutes from './tour.routes.js';
import bookingRoutes from './booking.routes.js';
import serviceRoutes from './service.routes.js';
import blogRoutes from './blog.routes.js';
import contentRoutes from './content.routes.js';
import { bookingController } from '../controllers/booking.controller.js';
import { tourController } from '../controllers/tour.controller.js';
import { validateTourInquiry, validateGeneralEnquiry } from '../middlewares/validator.js';
import { openSkyService } from '../services/opensky.service.js';

const apiRouter = Router();

// Health Check
apiRouter.get('/health', async (req, res) => {
  try {
    const providerCheck = await openSkyService.getTourTypes();
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      provider: {
        connected: !!providerCheck,
        typesCount: providerCheck?.data?.length || 0,
      },
    });
  } catch (err: any) {
    res.json({
      status: 'degraded',
      timestamp: new Date().toISOString(),
      provider: {
        connected: false,
        message: err.message || 'Provider connection issue',
      },
    });
  }
});

// Main Route Modules
apiRouter.use('/tours', tourRoutes);
apiRouter.use('/bookings', bookingRoutes);
apiRouter.use('/services', serviceRoutes);
apiRouter.use('/blogs', blogRoutes);
apiRouter.use('/content', contentRoutes);

// Compatibility & Direct Aliases matching OpenSky Docs
apiRouter.post('/tour-inquiries', validateTourInquiry, bookingController.createTourInquiry.bind(bookingController));
apiRouter.post('/enquiries', validateGeneralEnquiry, bookingController.createGeneralEnquiry.bind(bookingController));
apiRouter.get('/tour-types', tourController.getTourTypes.bind(tourController));

// Destinations helper endpoint
apiRouter.get('/destinations', async (req, res, next) => {
  try {
    const toursRes = await openSkyService.getTours({ per_page: 50 });
    const tours = toursRes?.data || [];
    const set = new Set<string>();
    tours.forEach((t: any) => {
      if (t.country) set.add(t.country);
      if (t.title) set.add(t.title);
      if (Array.isArray(t.locations)) {
        t.locations.forEach((loc: string) => set.add(loc));
      }
    });
    res.json({
      success: true,
      destinations: Array.from(set),
    });
  } catch (error) {
    next(error);
  }
});

export default apiRouter;
