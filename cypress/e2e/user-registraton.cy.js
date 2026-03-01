const RegisterPage = require('../support/pages/RegisterPage')
const registerMessages = require('../fixtures/messages/register/registerMessages')
const userFactory = require('../fixtures/factories/userFactory')

const registerPage = new RegisterPage()

describe('Register User', () => {

    beforeEach(function () {
        registerPage.visit()
    })

    it('TC-007: Successful new user registration', () => {
        registerPage.register(userFactory.createUserValid())
        registerPage.verifyRegisterSuccess(registerMessages.successMessage())
    })

    it('TC-008: Failed new user registration due to invalid email format', () => {
        registerPage.register(userFactory.createUserInvalid())
        registerPage.verifyRegisterEmailInvalid()
    })

    it('TC-009: Failed new user registration due to empty fields', () => {
        registerPage.clickRegisterButton()
        registerPage.verifyRegisterFailure(registerMessages.errorMessageEmptyFields())
    })



})