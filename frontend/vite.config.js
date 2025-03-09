import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend server
        changeOrigin: true,
        secure: false, // Only needed if using HTTPS with self-signed certs
      },
      "/images": {
        target: "http://localhost:5000", // Backend server
        changeOrigin: true,
        secure: false, // Only needed if using HTTPS with self-signed certs
      },
    },
  },
});
