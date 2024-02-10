import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Specify the options for the development server
    // Enable auto-saving
    watch: {
      // Enable file watching for changes
      usePolling: true, // Use polling for file watching (useful in some environments)
      interval: 1000, // Polling interval in milliseconds
    },
    // Enable auto-refreshing
    hmr: {
      // Enable hot module replacement (HMR)
      protocol: "ws", // Protocol used for HMR, usually 'ws' for WebSocket
    },
  },
});
