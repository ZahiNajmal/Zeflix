import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // optional, makes imports cleaner
    },
  },
  server: {
    port: 5173, // you can change if needed
    open: true,
  },
  build: {
    outDir: "dist",
  },
  // 👇 this is the real fix for React Router
  optimizeDeps: {},
  preview: {
    port: 4173,
    strictPort: true,
  },
});
