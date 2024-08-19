class MyInfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors

    }

        fillPersonaDetails(firstName, lastName) {
            cy.get(this.selectorsList().firstNameField).clear().type(firstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        }
    
        fillEmployeeDetails (EmployId, OtherId, DriversLicense, DriversDate) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(DriversLicense)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(DriversDate)
            cy.get(this.selectorsList().dateCloseButton).click()
        }

        saveForm(){
            cy.get(this.selectorsList().submitButton).eq(0).click()
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')
        }

        fillStatus () {
            cy.get(this.selectorsList().genericComboBox).eq(0).click()
            cy.get(this.selectorsList().secondItemComboBox).click()
            cy.get(this.selectorsList().genericComboBox).eq(1).click()
            cy.get(this.selectorsList().thirdItemComboBox).click()
        }
    }


export default MyInfoPage