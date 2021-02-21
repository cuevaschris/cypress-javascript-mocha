/// <reference types="cypress"/>

describe("Fibonacci login tests", () => {
    beforeEach("go to login page",() => {
        cy.visit("https://fibonacci-staging.lawadvisor.com/")
        // cy.clearCookie("_fibonacci_key",{timeout: 20000})
    })

    it("should be able to login to Fibonacci", () => {
        cy.get("#email").type("christopher.cuevas+superadminstg@lawadvisor.com")
        cy.get("#password").type("chris@Work101")
        cy.get("#submit-button").click();
    
        cy.get("#activity_widget").should("be.visible")
    })
})
