import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://craftsupport.net",
  integrations: [tailwind(), sitemap()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: true,
    isr: true,
    maxDuration: 8,
  }),
});
