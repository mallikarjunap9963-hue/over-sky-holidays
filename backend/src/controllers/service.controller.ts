import { Request, Response, NextFunction } from 'express';
import { openSkyService } from '../services/opensky.service.js';

export class ServiceController {
  async getServices(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await openSkyService.getServices();
      return res.json({
        success: true,
        data: data.data || data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getServiceById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const data = await openSkyService.getServiceById(id);
      return res.json({
        success: true,
        data: data.data || data,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const serviceController = new ServiceController();
