
import ObjectsPage from '../../fixtures/Elements/ElementProduct.json'

export class ProductPage {

    visit() {
        cy.url().should('include', '/admin/home')
        cy.visit('/admin/cadastrarprodutos')
    }

    fillProductName(name) {
        cy.get(ObjectsPage.nameInput).type(name)
    }

    fillProductPrice(price) {
        cy.get(ObjectsPage.priceInput).type(price)
    }

    fillProductDescription(description) {
        cy.get(ObjectsPage.descriptionInput).type(description)
    }

    fillProductQuantity(quantity) {
        cy.get(ObjectsPage.quantityInput).type(quantity)
    }

    clickRegisterButton() {
        cy.get(ObjectsPage.registerButton).click()
    }

    clickRegisterProductsMenu() {
        cy.get(ObjectsPage.registerProductsMenu).click()
    }

    registerProduct({ name, price, description, quantity }) {
        this.fillProductName(name)
        this.fillProductPrice(price)
        this.fillProductDescription(description)
        this.fillProductQuantity(quantity)
        this.clickRegisterButton()
    }

    verifyRegisterSuccess(nameProduct) {
        cy.get('tbody tr td').contains(nameProduct).should('be.visible')
    }

    verifyRegisterFailure(messages) {
        messages.forEach(message => {
            cy.contains(message).should('be.visible')
        })
    }

    deleteProduct(nameProduct) {
        cy.get('tbody tr td').contains(nameProduct).parent().find('button').contains('Excluir').click()
    }

    verifyDeleteSuccess(nameProduct) {
        cy.get('tbody tr td').contains(nameProduct).should('not.exist')
    }

    verifyRegisterFailureDuplicate() {
        cy.contains(ObjectsPage.duplicateNameMessage).should('be.visible')
    }

    waitListProductsLoaded() {
        cy.get('tbody tr').should('have.length.greaterThan', 0)
    }
}
