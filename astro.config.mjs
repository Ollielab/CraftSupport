import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://craftsupport.net',
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
    imageService: true,
    edgeMiddleware: true,
    images: {
      domains: ['i.pinimg.com']
    }
  }),
});