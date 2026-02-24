import { LoginPage } from '../support/pages/LoginPage'
import createLoginData from '../fixtures/Factories/LoginFactory'
import { LoginData } from '../fixtures/TestData/Login/LoginData'

const loginPage = new LoginPage()

describe('Login', () => {
    beforeEach(function () {
        loginPage.visit()

    })

    it('TC-001: Login with valid credentials', function () {
        createLoginData(LoginData.loginValid())
            .then(user => {
                loginPage.login(user)
            })

        loginPage.verifyLoginSuccess()
    })


    it('TC-002: Login with invalid credentials', function () {
        loginPage.login(LoginData.loginInvalid())
        loginPage.verifyLoginError(LoginData.mensagesErrorLoginInvalid())
    })

    it('TC-003: Login with empty fields', function () {
        loginPage.clickLoginButton()
        loginPage.verifyLoginErrorMultiple(LoginData.mensagesErrorMultiple())
    })

    it('TC-004: Email format validation', function () {
        loginPage.login(LoginData.emailFormatInvalid())
        loginPage.validatedLoginFailureInput()
    })

    it('TC-005: Redirection based on user profile', function () {
        createLoginData(LoginData.loginValid())
            .then(user => {
                loginPage.login(user)
            })
        cy.url().should('include', '/admin/home')
    })
})