import { openSkyService } from '../services/opensky.service.js';
export class ContentController {
    async getHeroes(req, res, next) {
        try {
            const data = await openSkyService.getHeroes();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getTestimonials(req, res, next) {
        try {
            const data = await openSkyService.getTestimonials();
            const items = data.data?.data || data.data || data;
            return res.json({
                success: true,
                data: items,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getOfferBanners(req, res, next) {
        try {
            const data = await openSkyService.getOfferBanners();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getPageBanners(req, res, next) {
        try {
            const page = req.params.page ? String(req.params.page) : undefined;
            const data = await openSkyService.getPageBanners(page);
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAdventures(req, res, next) {
        try {
            const data = await openSkyService.getAdventures();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAdventureCategories(req, res, next) {
        try {
            const data = await openSkyService.getAdventureCategories();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAboutSection(req, res, next) {
        try {
            const data = await openSkyService.getAboutSectionActive();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getWhyChoose(req, res, next) {
        try {
            const data = await openSkyService.getWhyChooseSectionsActive();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getTravelSupport(req, res, next) {
        try {
            const data = await openSkyService.getTravelSupportActive();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getOurProcesses(req, res, next) {
        try {
            const data = await openSkyService.getOurProcessesActive();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getCounters(req, res, next) {
        try {
            const data = await openSkyService.getCounters();
            return res.json({
                success: true,
                data: data.data || data,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getCoreValues(req, res, next) {
        try {
            const data = await openSkyService.getCoreValues();
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
export const contentController = new ContentController();
