import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
  resolve: {
    alias: {
      fs: false,
      path: false,
      sharp: false,
    },
  },
  optimizeDeps: {
    exclude: ["fs", "path", "sharp"],
  },
});
