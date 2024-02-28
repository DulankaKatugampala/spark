import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/spark/`,
  plugins: [
    vue(),
    VitePWA({
      mode: "production",
      base: "/spark/",
      srcDir: "src",
      swDest: "dist",
      filename: "sw.js",
      includeAssets: ["/public/"],
      strategies: "generateSW",
      manifest: {
        id: "sparkapp",
        name: "Spark",
        description: "",
        short_name: "Spark",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icons192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/icons512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
