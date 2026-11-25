// The Pages artifact is static and uses the same hash router and React UI.
import { build } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
const path = relative => fileURLToPath(new URL(relative, import.meta.url));
await build({
  configFile: false, root: path("../static-pages/"), base: "./", publicDir: false,
  plugins: [react()], resolve: {alias: {"@": path("../")}},
  build: {outDir: path("../dist/pages/"), emptyOutDir: true},
});
