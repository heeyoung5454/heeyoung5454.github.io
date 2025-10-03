import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixins.scss";
        `,
        silenceDeprecations: ["legacy-js-api"],
        quietDeps: true,
      },
    },
  },
});
