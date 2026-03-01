const ObjectsPage = require('../../fixtures/Elements/ElementRegister.json')

module.exports = class RegisterPage {
    access() {
        cy.visit('/cadastrarusuarios');
    }

    fillName(name) {
        cy.get(ObjectsPage.nameInput).type(name);
        return this;
    }

    fillEmail(email) {
        cy.get(ObjectsPage.emailInput).type(email);
        return this;
    }

    fillPassword(password) {
        cy.get(ObjectsPage.passwordInput).type(password);
        return this;
    }

    clickRegisterButton() {
        cy.get(ObjectsPage.registerButton).click();
        return this;
    }

    register({ name, email, password }) {
        this.fillName(name)
            .fillEmail(email)
            .fillPassword(password)
            .clickRegisterButton()
        return this;
    }

    verifyRegisterSuccess(message) {
        cy.contains(message).should('be.visible');
    }

    verifyRegisterFailure(errorMessages) {
        errorMessages.forEach(message => {
            cy.contains(message).should('be.visible');
        })
    }

    verifyRegisterEmailInvalid() {
        cy.get(ObjectsPage.emailInput)
            .then(($input) => {
                const input = $input[0]

                expect(input.validity.typeMismatch).to.be.true
            });
    }
}
