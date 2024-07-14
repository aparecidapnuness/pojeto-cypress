const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wd1fep", 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //para gravar os videos depois ir no terminal npx cypress run
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },
});
