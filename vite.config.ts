import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Увеличиваем лимит предупреждения
    rollupOptions: {
      output: {
        manualChunks: {
          // Основные React библиотеки
          "react-vendor": [
            "react",
            "react-dom",
            "react-router",
            "react-router-dom",
          ],

          // Библиотеки для состояния и запросов
          "state-management": [
            "mobx",
            "mobx-react-lite",
            "mobx-toolbox",
            "@tanstack/react-query",
          ],

          // Библиотеки для интернационализации
          i18n: [
            "i18next",
            "i18next-browser-languagedetector",
            "i18next-http-backend",
            "react-i18next",
          ],

          // Утилиты и прочие библиотеки
          utils: [
            "axios",
            "motion",
            "react-hook-form",
            "react-responsive",
            "react-content-loader",
          ],
        },
      },
    },
    minify: false,
    sourcemap: true,
  },
});
