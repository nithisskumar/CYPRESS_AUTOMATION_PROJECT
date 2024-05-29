const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1wechi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});