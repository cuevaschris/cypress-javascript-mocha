export class TodoPage {
    navigate(){
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    }

    addTodo(todoText){
        cy.get(".new-todo").type(todoText + "{enter}");
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex}) .toggle`).click();
    }

    showOnlyCompletedTodos(){
        cy.contains("Completed").click();
    }

    showOnlyActiveTodos(){
        cy.contains("Active").click();
    }

    showAllTodos(){
        cy.contains("All").click();
    }

    clearCompleted(){
        cy.contains("Clear completed").click();
    }

    validateTodoTxt(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex}) label`).should("have.text", expectedText);
    }

    validateNumberOfTodoShown(expectedNumberOfTodos){
        cy.get(".todo-list li").should("have.length", expectedNumberOfTodos);
    }

    validateTodoCompletedState(todoIndex, shouldBeCompleted){
        const l = cy.get(`.todo-list li:nth-child(${todoIndex}) label`);
        l.should(`${shouldBeCompleted ? "" : "not."}have.css`, "text-decoration-line", "line-through");
    }

    validateToggleState(todoIndex, shouldBeToggled) {
        const l = cy.get(`.todo-list li:nth-child(${todoIndex}) .toggle`)
        l.should(`${shouldBeToggled ? "" : "not."}be.checked`)
    }

}