const RegisterPage = require('../support/pages/RegisterPage')
const RegisterData = require('../fixtures/TestData/Register/RegisterData')

const registerPage = new RegisterPage()

describe('Register User', () => {

    beforeEach(function () {
        registerPage.visit()
    })

    it('TC-007: Successful new user registration', () => {
        registerPage.register(RegisterData.registerValid())
        registerPage.verifyRegisterSuccess(RegisterData.successMessage())
    })

    it('TC-008: Failed new user registration due to invalid email format', () => {
        registerPage.register(RegisterData.registerEmailInvalid())
        registerPage.verifyRegisterEmailInvalid()
    })

    it('TC-009: Failed new user registration due to empty fields', () => {
        registerPage.clickRegisterButton()
        registerPage.verifyRegisterFailure(RegisterData.errorMessageEmptyFields())
    })



})