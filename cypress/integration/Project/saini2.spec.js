///<reference types="cypress" />

describe('verify the functionality of sainitours', () => {
    it('TC01', () => {
        cy.visit('https://sainitravels.com/')
        cy.get('select[id="toCity"]').contains('Ahmednagar')
        cy.get('#swap').click()
    })

    it.only('TC02 Datepick', () => {
        let date = new Date()
        date.setDate(date.getDate() + 10)
        let year = date.getFullYear()
        let month = date.getMonth()
        let DATE = date.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(DATE)
        let wmonth = date.toLocaleString("Default", { month: "short" })
        cy.log(wmonth)
        cy.visit('https://sainitravels.com/')
        cy.get('#departDate').click()
        cy.get('[data-handler="selectDay"]').first().click()
        cy.get('#returnDate').click()
        cy.get('[data-handler="selectDay"]').eq(9).click()
        cy.get('#submitSearch').click()
        cy.contains('Bus Type').find('label')
        //.ui-state-default
    })
})