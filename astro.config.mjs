// @ts-check
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  site: "https://matyson.github.io",
  base: "wkb",
  integrations: [
    starlight({
      components: {
        PageFrame: "src/components/PageFrame.astro",
      },
      title: "wkb",
      social: {
        github: "https://github.com/matyson/wkb",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
    react(),
    tailwind(),
  ],
});
