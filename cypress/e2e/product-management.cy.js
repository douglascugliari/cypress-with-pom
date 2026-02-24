
import { ProductPage } from '../support/pages/ProductPage'
import createLoginData from '../fixtures/Factories/LoginFactory'
import { LoginData } from '../fixtures/TestData/Login/LoginData'
import { LoginPage } from '../support/pages/LoginPage'
import { ProductData } from '../fixtures/TestData/Product/ProductData'

describe('Product Management', () => {

    const productPage = new ProductPage();
    const loginPage = new LoginPage()

    beforeEach(function () {
        loginPage.visit()
        createLoginData(LoginData.loginValid())
            .then(user => {
                loginPage.login(user)

            })

        productPage.visit()
    })

    it('TC-010: Register new product successfully', function () {
        const product = ProductData.productValid();
        productPage.registerProduct(product);
        productPage.verifyRegisterSuccess(product.name);
    });

    it('TC-011: Register product with invalid fields', function () {
        productPage.registerProduct(ProductData.productInvalid());
        productPage.verifyRegisterFailure(ProductData.expectedMessagesError());
    });

    it('TC-012: Register product with empty fields', function () {
        productPage.clickRegisterButton();
        productPage.verifyRegisterFailure(ProductData.expectedMessagesErrorMultiple());
    });

    it('TC-013: Delete product', function () {
        const product = ProductData.productValid();
        productPage.registerProduct(product);
        productPage.deleteProduct(product.name);
        productPage.verifyDeleteSuccess(product.name);
    });

    it('TC-014: Register product with duplicate name', function () {
        const product = ProductData.productValid();
        productPage.registerProduct(product);
        productPage.waitListProductsLoaded();
        productPage.clickRegisterProductsMenu();
        productPage.registerProduct(product);
        productPage.verifyRegisterFailureDuplicate();

    });
})