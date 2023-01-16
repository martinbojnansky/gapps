const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://script.google.com/macros/s/AKfycbwklFUQk36WAf5NvTj_KgGJN99fPE-Oq5mmERqI_exi4LwRMECyOQrIB262C3YoWBOt/exec',
    setupNodeEvents(on, config) {},
  },
});
