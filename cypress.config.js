const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    // URL base do aplicativo
    baseUrl: process.env.BASE_URL || 'https://front.serverest.dev',

    // Environment variables
    env: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://serverest.dev'
    },

    // Navegador Padrão
    defaultBrowser: process.env.BROWSER || 'chrome',

    // Configurações de Viewport padrão
    viewportWidth: parseInt(process.env.VIEWPORT_WIDTH) || 1280,
    viewportHeight: parseInt(process.env.VIEWPORT_HEIGHT) || 720,

    // Timeouts
    defaultCommandTimeout: parseInt(process.env.TIMEOUT) || 10000,
    requestTimeout: parseInt(process.env.REQUEST_TIMEOUT) || 10000,
    responseTimeout: parseInt(process.env.RESPONSE_TIMEOUT) || 10000,

    // Screenshots e Vídeos
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/screenshots',
    video: true,
    videosFolder: 'cypress/reports/videos',
    videoCompression: 32,


    // Retries apenas para CI (opcional)
    retries: {
      runMode: parseInt(process.env.CI_RETRIES) || 1,
      openMode: 0
    },

    setupNodeEvents(on, config) {
      // Log de screenshots
      on('after:screenshot', (details) => {
        console.log('Screenshot salvo em:', details.path)
      })

      // Log de vídeos
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          console.log(`Vídeo gravado: ${results.video}`)
        }
      })

      return config
    }
  }
})