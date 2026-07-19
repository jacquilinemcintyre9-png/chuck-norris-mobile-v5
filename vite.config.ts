import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

let siteConfiguration = {};
try {
  siteConfiguration = require("./.figma/make/site.json");
} catch {
  siteConfiguration = {};
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8443,
    host: "0.0.0.0",
  },
  define: {
    __FIGMA_SITE__: JSON.stringify(siteConfiguration),
  },
});
