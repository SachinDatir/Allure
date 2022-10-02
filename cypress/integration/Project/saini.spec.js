///<reference types="cypress" />

describe('verify the functionality of saini tours and travels', () => {
    it('TC01', () => {
        cy.visit(' https://sainitravels.com/')
        cy.get('li[class="Login_Signup"]').contains('Login/Signup').click()
        cy.get('div[style="width:90%"]').type('9146753015')
        cy.get('div[class="submit"]').click()
        cy.get('.OTP').last().type('7187')
        cy.get('[class="otp-submit"]').click()
        cy.get('input[name="customerName"]').type('sachin')
        cy.get('input[name="customerAge"]').type('23')
        cy.get('input[name="customerEmail"]').type('sdatir83@gmail.com')
        cy.get('select[name="gender"]').select('Male')
        cy.get('div[class="pass-details-save"]').click()
    })
})



// https://sainitravels.com/