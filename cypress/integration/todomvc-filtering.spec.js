/// <reference types="cypress"/>

describe("filtering", () => {
    beforeEach(() =>{
        cy.visit("http://todomvc-app-for-testing.surge.sh/")

        cy.get(".new-todo").type("Clean room{enter}")
        cy.get(".new-todo").type("Learn JavaScript{enter}")
        cy.get(".new-todo").type("Cypress is the best{enter}")

        // will toggle or check the second item on the list
        cy.get(".todo-list li:nth-child(2) .toggle").click()
    })

    it("should filter by 'Active' todos", () => {
        cy.contains("Active").click()

        cy.get(".todo-list li").should("have.length", 1)
    })

    it("should filter by 'Completed' todos", () => {
        cy.contains("Completed").click()
        cy.get(".todo-list li").should("have.length", 1)
    })

    it("should filter by 'All' todos", () => {
        cy.contains("All").click()
        cy.get(".todo-list li").should("have.length", 3)
    })


})