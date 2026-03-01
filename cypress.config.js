const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'your-project-id', // Para integração com Cypress Cloud (opcional)

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    baseUrl: 'https://front.serverest.dev',

    // Configurações de Viewport padrão
    viewportWidth: 1280,
    viewportHeight: 720,

    // Timeouts
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,

    // Screenshots e Vídeos
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/screenshots',
    video: true,
    videosFolder: 'cypress/reports/videos',
    videoCompression: 32,


    // Retries apenas para CI (opcional)
    retries: {
      runMode: 1,
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