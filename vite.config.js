import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // sentryVitePlugin({
    //   org: "sebastian-3o",
    //   project: "playwright-demo",
    //   authToken:
    //     "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",
    // }),
  ],
  build: {
    sourcemap: true,
    sourcemapFile: "/static",
    emptyOutDir: true,
  },
});
