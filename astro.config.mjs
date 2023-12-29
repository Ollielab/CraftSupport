import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://craftsupport.net',
  integrations: [tailwind(), sitemap(), compress()],
  prefetch: {
    prefetchAll: true
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    analytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    },
    imageService: true,
    edgeMiddleware: true
  })
});