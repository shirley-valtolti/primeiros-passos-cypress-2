import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it(' User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonaDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmploydID', 'OtherID', 'DriversLicense', '2025-07-29')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

  
})