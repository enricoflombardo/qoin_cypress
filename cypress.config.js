const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1900,
  viewportHeight: 900,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: 'https://dev-digid-ntt-admin.loyalto.id'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'tests/scenarios/**/*.test.js'
  },
  reporter: "cypress-qase-reporter",
  reporterOptions: {
      apiToken: "fc42ecdb21e883a1e42f7046eb110922487ddd8d",
      projectCode: "VFCD2",
      logging: true,
      basePath: "https://api.qase.io/v1"
  }
});
