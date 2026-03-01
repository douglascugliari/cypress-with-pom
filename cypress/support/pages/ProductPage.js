
const ObjectsPage = require('../../fixtures/Elements/ElementProduct.json')

module.exports = class ProductPage {

    access() {
        cy.url().should('include', '/admin/home');
        cy.visit('/admin/cadastrarprodutos');
    }

    fillProductName(name) {
        cy.get(ObjectsPage.nameInput).type(name);
        return this;
    }

    fillProductPrice(price) {
        cy.get(ObjectsPage.priceInput).type(price);
        return this;
    }

    fillProductDescription(description) {
        cy.get(ObjectsPage.descriptionInput).type(description);
        return this;
    }

    fillProductQuantity(quantity) {
        cy.get(ObjectsPage.quantityInput).type(quantity);
        return this;
    }

    clickRegisterButton() {
        cy.get(ObjectsPage.registerButton).click();
        return this;
    }

    clickRegisterProductsMenu() {
        cy.get(ObjectsPage.registerProductsMenu).click();
        return this;
    }

    registerProduct({ name, price, description, quantity }) {
        this.fillProductName(name)
            .fillProductPrice(price)
            .fillProductDescription(description)
            .fillProductQuantity(quantity)
            .clickRegisterButton();
        return this;
    }

    verifyRegisterSuccess(nameProduct) {
        cy.get(ObjectsPage.productTable).contains(nameProduct).should('be.visible');
    }

    verifyRegisterFailure(messages) {
        messages.forEach(message => {
            cy.contains(message).should('be.visible');
        })
    }

    deleteProduct(nameProduct) {
        cy.get(ObjectsPage.productTable).contains(nameProduct).parent().find('button').contains('Excluir').click();
    }

    verifyDeleteSuccess(nameProduct) {
        cy.get(ObjectsPage.productTable).contains(nameProduct).should('not.exist');
    }

    verifyRegisterFailureDuplicate() {
        cy.contains(ObjectsPage.duplicateNameMessage).should('be.visible')
    }

    waitListProductsLoaded() {
        cy.waitForElementVisible(ObjectsPage.productTable, 10000)
    }

}