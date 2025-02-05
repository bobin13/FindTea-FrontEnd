// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "ec2-18-206-164-82.compute-1.amazonaws.com", // Add your EC2 hostname
      "localhost", // Keep localhost for local development
    ],
    // Optional: Explicitly set the host to `0.0.0.0` for external access
    host: '0.0.0.0',
    port: 5173, // Ensure the port matches your app’s port
  },
});