const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1wechi',
  record_Key: '2492c151-2cc8-49e7-80fe-9bfa0376ace6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});