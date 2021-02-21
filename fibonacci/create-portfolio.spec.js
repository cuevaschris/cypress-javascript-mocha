/// <reference types="cypress"/>

describe("Fibonacci login tests", () => {
    beforeEach("go to matters page",() => {
        cy.visit("https://fibonacci-staging.lawadvisor.com/matters")
    })

    it("should create a new matter", () => {
        cy.contains("Create Matter").click();
        cy.get(".submit .text").contains("Select matter type").click();
        cy.get(".project-choice > .card:nth-child(3)").contains("Select").click();

        cy.get("#matter_title").type("Legal Proceeding");
        cy.get("#matter_reference_code").type("LPNUMBER1627361783617823")
        cy.get("#matter_description").type("This is a description for the legal proceeding") 
        cy.get("#matter_jurisdiction_ids_container").type("Philippines").contains("Philippines").click()
        cy.get('#matter_client_container').type("Lawadvisor").contains("LawAdvisor").click()
        cy.get("#matter_custom_field_params_d0fb82fd-9319-449e-8cf9-5f87ca313ead").type("UK Supreme Court")

        // No unique selectors
        // Role 
        // Lead Lawyer
        cy.get(":nth-child(12) > .container > .tagify").type("Defendant{downarrow}{enter}")
        cy.get(":nth-child(13) > .container > .tagify").type("Lebron James{downarrow}{enter}")
        cy.get("#matter_custom_field_params_ecf8e858-d80b-49cc-b508-95e9f4ccb582").type("Counter Party")
        cy.get(":nth-child(15) > .container > .tagify").type("PatentNum789432{enter}")
        cy.get(".btn.-primary span").click()
        cy.get(".btn.-primary span").click()
        cy.get(".btn.-primary span").click()
    })
})