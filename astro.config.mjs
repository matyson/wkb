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
          label: "Fundamentals",
          autogenerate: { directory: "fundamentals" },
        },
        {
          label: "Tools & Libraries",
          autogenerate: { directory: "tools" },
        },
        {
          label: "Deployment",
          autogenerate: { directory: "deploy" },
        },
        {
          label: "Some Rationale",
          autogenerate: { directory: "rationale" },
        },
        {
          label: "A word on bleeding edge",
          autogenerate: { directory: "bleeding-edge" },
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
      ],
    }),
    react(),
    tailwind(),
  ],
});
