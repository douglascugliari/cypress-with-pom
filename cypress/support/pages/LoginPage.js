const ObjectsPage = require('../../fixtures/Elements/ElementLogin.json')
require('@testing-library/cypress/add-commands')

module.exports = class LoginPage {
    visit() {
        cy.visit(ObjectsPage.url)
    }

    fillEmail(email) {
        cy.get(ObjectsPage.emailInput).type(email)
    }

    fillPassword(password) {
        cy.get(ObjectsPage.passwordInput).type(password)
    }

    clickLoginButton() {
        cy.get(ObjectsPage.loginButton).click()
    }

    login({ email, password }) {
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickLoginButton()
    }

    verifyLoginError(mensageError) {
        if (mensageError) {
            cy.findByRole('alert').should('contain.text', mensageError)
        } else {
            cy.findByRole('alert').should('be.visible')
        }
    }

    verifyLoginErrorMultiple(messagesError) {
        messagesError.forEach((message) => {
            cy.contains('span', message).should('be.visible')
        })

    }

    validatedLoginFailureInput() {
        cy.get(ObjectsPage.emailInput)
            .then(($input) => {
                const input = $input[0]

                expect(input.validity.typeMismatch).to.be.true
            })


    }

    verifyLoginSuccess() {
        cy.findByRole('heading', {
            level: 1,
            name: /bem vindo/i
        }).should('be.visible')
    }
}