import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericComboBox: ".oxd-select-text-input",
    secondItemComboBox: ".oxd-select-dropdown > :nth-child(2) > span",
    thirdItemComboBox: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  
  it.only(' User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DriversTest')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorList.genericComboBox).eq(0).click()
    cy.get(selectorList.secondItemComboBox).click()
    cy.get(selectorList.genericComboBox).eq(1).click()
    cy.get(selectorList.thirdItemComboBox).click()
  })

  it('Fail - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
    
  })
})