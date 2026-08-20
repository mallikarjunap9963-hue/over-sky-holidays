import dotenv from 'dotenv';
import path from 'path';
// Load .env file from project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
export const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    opensky: {
        baseUrl: (process.env.OPENSKY_API_BASE_URL || 'https://api.openskyholidays.com').replace(/\/+$/, ''),
        apiKey: process.env.OPENSKY_API_KEY || '',
        username: process.env.OPENSKY_USERNAME || '',
        password: process.env.OPENSKY_PASSWORD || '',
        timeoutMs: process.env.OPENSKY_TIMEOUT_MS ? parseInt(process.env.OPENSKY_TIMEOUT_MS, 10) : 10000,
    },
    clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
};
