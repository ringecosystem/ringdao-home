import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { componentTagger } from "lovable-tagger";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    port: 8080,
    host: "::",
  },
  plugins: [
    preact(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));