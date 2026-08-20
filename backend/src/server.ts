import { createApp } from './app.js';
import { config } from './config/env.js';

const app = createApp();

const server = app.listen(config.port, () => {
  console.log(`\n=================================================`);
  console.log(`🚀 OpenSky Holidays API Server is running!`);
  console.log(`📡 Local URL: http://localhost:${config.port}`);
  console.log(`🔗 API Base: http://localhost:${config.port}/api`);
  console.log(`🩺 Health:   http://localhost:${config.port}/api/health`);
  console.log(`🌐 Provider: ${config.opensky.baseUrl}`);
  console.log(`=================================================\n`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
