import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/lib/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  tsconfig: "./tsconfig.build.json" // ✅ VERY IMPORTANT
});