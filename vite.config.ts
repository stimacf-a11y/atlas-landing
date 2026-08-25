import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Self-hosting target (Docker / Google Cloud Run): produce a standalone Node
  // server at .output/server/index.mjs that listens on process.env.PORT.
  nitro: { preset: "node-server" },
});
