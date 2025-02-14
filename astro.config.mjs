import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://aviaventura.com/',
  integrations: [tailwind({
    applyBaseStyles: false,
  }), sanity({
    projectId: "jnbqgyyk",
    dataset: "production",
    useCdn: true,
  }), react(), sitemap({
    // configuration options
  })],
});
