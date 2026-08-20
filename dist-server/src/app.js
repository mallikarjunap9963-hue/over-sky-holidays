import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { requestLogger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import apiRouter from './routes/index.js';
export function createApp() {
    const app = express();
    // CORS Configuration
    app.use(cors({
        origin: [config.clientUrl, 'http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    }));
    // Body Parsing Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // Request Logger
    app.use(requestLogger);
    // Mount API router
    app.use('/api', apiRouter);
    // Root endpoint info
    app.get('/', (req, res) => {
        res.json({
            name: 'OpenSky Holidays API Gateway',
            version: '1.0.0',
            status: 'online',
            documentation: 'https://api.openskyholidays.com/api/docs',
            health: '/api/health',
        });
    });
    // 404 handler for undefined API routes
    app.use((req, res) => {
        res.status(404).json({
            success: false,
            message: `API route ${req.method} ${req.originalUrl} not found`,
        });
    });
    // Global Error Handler
    app.use(errorHandler);
    return app;
}
