import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "react",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173",
  },
});
