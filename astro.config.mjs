import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://craftsupport.net",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  output: "static",
  adapter: vercel({
    skewProtection: true,
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: true,
    isr: true,
    maxDuration: 8,
  }),
});
