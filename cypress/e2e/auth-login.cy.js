const LoginPage = require('../support/pages/LoginPage')
const { createUserAPI } = require('../services/userService')
const loginMessages = require('../fixtures/messages/login/loginMessages')
const loginFactory = require('../fixtures/factories/loginFactory')

const loginPage = new LoginPage()

describe('Login', () => {
    beforeEach(function () {
        loginPage.visit()

    })

    it('TC-001: Login with valid credentials', function () {
        createUserAPI(loginFactory.createLoginValid())
            .then(user => {
                loginPage.login(user)
            })

        loginPage.verifyLoginSuccess()
    })


    it('TC-002: Login with invalid credentials', function () {
        loginPage.login(loginFactory.createLoginInvalid())
        loginPage.verifyLoginError(loginMessages.mensagesErrorLoginInvalid())
    })

    it('TC-003: Login with empty fields', function () {
        loginPage.clickLoginButton()
        loginPage.verifyLoginErrorMultiple(loginMessages.mensagesErrorMultiple())
    })

    it('TC-004: Email format validation', function () {
        loginPage.login(loginFactory.createEmailFormatInvalid())
        loginPage.validatedLoginFailureInput()
    })

    it('TC-005: Redirection based on user profile', function () {
        createUserAPI(loginFactory.createLoginValid())
            .then(user => {
                loginPage.login(user)
            })
        cy.url().should('include', '/admin/home')
    })
})