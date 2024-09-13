import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://nix-paderborn.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({ }),
    robotsTxt(),
  ]
});
