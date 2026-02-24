Cypress.Commands.add('waitForElementVisible', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible')
})

