import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://austinderingallen.github.io",
  base: "/loopstudios-landing-page",
  integrations: [react(), tailwind()],
});
