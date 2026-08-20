import { openSkyService } from '../services/opensky.service.js';
export class ServiceController {
    async getServices(req, res, next) {
        try {
            const data = await openSkyService.getServices();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getServiceById(req, res, next) {
        try {
            const id = String(req.params.id);
            const data = await openSkyService.getServiceById(id);
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
export const serviceController = new ServiceController();
