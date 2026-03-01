
const ProductPage = require('../support/pages/productPage')
const loginFactory = require('../fixtures/factories/loginFactory')
const LoginPage = require('../support/pages/LoginPage')
const productFactory = require('../fixtures/factories/productFactory')
const productMessages = require('../fixtures/messages/product/productMessages')
const userService = require('../services/userService')

describe('Product Management', () => {

    const productPage = new ProductPage();
    const loginPage = new LoginPage()

    beforeEach(function () {
        loginPage.access()
        userService.createUserAPI(loginFactory.createLoginValid())
            .then(user => {
                loginPage.login(user)

            })

        productPage.access()
    })

    it('TC-010: Register new product successfully', function () {
        const product = productFactory.createProductValid();
        productPage.registerProduct(product);
        productPage.verifyRegisterSuccess(product.name);
    });

    it('TC-011: Register product with invalid fields', function () {
        productPage.registerProduct(productFactory.createProductInvalid());
        productPage.verifyRegisterFailure(productMessages.expectedMessagesError());
    });

    it('TC-012: Register product with empty fields', function () {
        productPage.clickRegisterButton();
        productPage.verifyRegisterFailure(productMessages.expectedMessagesErrorMultiple());
    });

    it('TC-013: Delete product', function () {
        const product = productFactory.createProductValid();
        productPage.registerProduct(product);
        productPage.deleteProduct(product.name);
        productPage.verifyDeleteSuccess(product.name);
    });

    it('TC-014: Register product with duplicate name', function () {
        const product = productFactory.createProductValid();
        productPage.registerProduct(product);
        productPage.waitListProductsLoaded();
        productPage.clickRegisterProductsMenu();
        productPage.registerProduct(product);
        productPage.verifyRegisterFailureDuplicate();

    });
})