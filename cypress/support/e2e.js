
require('./commands')
require('cypress-mochawesome-reporter/register')

const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test) => {
    const videoName = Cypress.spec.name.replace(/\.js.*$/, '.js')
    const videoUrl = 'videos/' + videoName + '.mp4'

    addContext({ test }, videoUrl)
})