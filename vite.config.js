import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mountain-whiz/", // This line was added
  build: {
    outDir: "dist", // And this line too
  },
});
