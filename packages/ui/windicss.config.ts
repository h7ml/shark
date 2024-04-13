import { defineConfig } from "windicss/helpers";
export default defineConfig({
  preflight: false,
  extract: {
    include: ["src/**/*.{html,vue,jsx,tsx,svelte}"],
  },
  darkMode: "class",
})
