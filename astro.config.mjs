import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://rbth7e5.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
