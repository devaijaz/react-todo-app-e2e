/// <reference types="cypress" />
context("Todos Count Tests", () => {
  it("Shoud print correct todo count", () => {
    cy.visit("/");
    cy.sel("todo-input").type("First Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Second Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Third Todo");
    cy.sel("todo-add-form").submit();

    cy.sel("todo-total-count").should("have.text", "3");

    cy.sel("todo-complete-button").eq(0).click();
    cy.sel("todo-pause-button").eq(0).click();

    cy.sel("todo-total-count").should("have.text", "3");
    cy.sel("todo-paused-count").should("have.text", "1");
    cy.sel("todo-completed-count").should("have.text", "1");
  });
});
