import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: {
      ignored: ["C:/DumpStack.log.tmp"], // Exclude the problematic file
    },
  },
});
