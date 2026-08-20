import { openSkyService } from '../services/opensky.service.js';
export class TourController {
    async getTours(req, res, next) {
        try {
            const page = req.query.page ? parseInt(String(req.query.page), 10) : 1;
            const per_page = req.query.per_page ? parseInt(String(req.query.per_page), 10) : 20;
            const search = req.query.search ? String(req.query.search) : undefined;
            const tour_type_id = req.query.tour_type_id ? parseInt(String(req.query.tour_type_id), 10) : undefined;
            const destination = req.query.destination ? String(req.query.destination) : undefined;
            const type = req.query.type ? String(req.query.type).toLowerCase() : undefined;
            const data = await openSkyService.getTours({ page, per_page, search, tour_type_id });
            let tours = data?.data || [];
            // Filter by type if provided (e.g. domestic or international)
            if (type && Array.isArray(tours)) {
                tours = tours.filter((t) => {
                    const typeName = (t.tour_type?.name || t.tour_type?.slug || '').toLowerCase();
                    return typeName.includes(type);
                });
            }
            // Filter by destination if provided
            if (destination && destination !== 'Select Destination' && Array.isArray(tours)) {
                const destLower = destination.toLowerCase();
                tours = tours.filter((t) => {
                    const matchTitle = (t.title || '').toLowerCase().includes(destLower);
                    const matchCountry = (t.country || '').toLowerCase().includes(destLower);
                    const matchLocs = Array.isArray(t.locations)
                        ? t.locations.some((l) => l.toLowerCase().includes(destLower))
                        : false;
                    return matchTitle || matchCountry || matchLocs;
                });
            }
            return res.json({
                success: true,
                data: tours,
                meta: data?.meta || { total: tours.length, current_page: page, per_page },
                links: data?.links,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async searchTours(req, res, next) {
        try {
            const { destination, tourType, travelDate, category, page, per_page } = req.query;
            const data = await openSkyService.getTours({
                page: page ? parseInt(String(page), 10) : 1,
                per_page: per_page ? parseInt(String(per_page), 10) : 50,
            });
            let results = data?.data || [];
            if (destination && destination !== 'Select Destination' && Array.isArray(results)) {
                const destLower = String(destination).toLowerCase();
                results = results.filter((t) => {
                    const matchTitle = (t.title || '').toLowerCase().includes(destLower);
                    const matchCountry = (t.country || '').toLowerCase().includes(destLower);
                    return matchTitle || matchCountry;
                });
            }
            if (tourType && Array.isArray(results)) {
                const typeLower = String(tourType).toLowerCase();
                results = results.filter((t) => {
                    const typeName = (t.tour_type?.name || t.tour_type?.slug || '').toLowerCase();
                    return typeName.includes(typeLower);
                });
            }
            return res.json({
                success: true,
                count: results.length,
                data: results,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getTourById(req, res, next) {
        try {
            const id = String(req.params.id);
            const data = await openSkyService.getTourById(id);
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getTourTypes(req, res, next) {
        try {
            const data = await openSkyService.getTourTypes();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getTourDetails(req, res, next) {
        try {
            const data = await openSkyService.getTourDetails();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getTourFeatures(req, res, next) {
        try {
            const data = await openSkyService.getTourFeatures();
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
export const tourController = new TourController();
