import ObjectsPage from '../../fixtures/Elements/ElementRegister.json'

export class RegisterPage {
    visit() {
        cy.visit(ObjectsPage.urlRegister)
    }

    fillName(name) {
        cy.get(ObjectsPage.nameInput).type(name)
    }

    fillEmail(email) {
        cy.get(ObjectsPage.emailInput).type(email)
    }

    fillPassword(password) {
        cy.get(ObjectsPage.passwordInput).type(password)
    }

    clickRegisterButton() {
        cy.get(ObjectsPage.registerButton).click()
    }

    register({ name, email, password }) {
        this.fillName(name)
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickRegisterButton()
    }

    verifyRegisterSuccess(message) {
        cy.contains(message).should('be.visible')
    }

    verifyRegisterFailure(errorMessages) {
        errorMessages.forEach(message => {
            cy.contains(message).should('be.visible')
        })
    }

    verifyRegisterEmailInvalid() {
        cy.get(ObjectsPage.emailInput)
            .then(($input) => {
                const input = $input[0]

                expect(input.validity.typeMismatch).to.be.true
            })
    }
}
