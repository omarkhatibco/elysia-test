import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  target: "node22",
  outDir: "dist",
  clean: true,
  bundle: true,
  dts: false,
  sourcemap: true,
  minify: process.env.NODE_ENV === "production",
  splitting: false,
  // Only bundle workspace packages
  // Skip bundling node_modules - let Vercel handle them
  skipNodeModulesBundle: true,
});
