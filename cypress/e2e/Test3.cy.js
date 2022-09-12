/// <reference types="cypress" />

context("Todos Count Tests", () => {
  it("Should have correct width of progressbar", () => {
    const todos_count = 10;
    const completed_count = 3;
    const paused_count = 1;

    cy.visit("/");
    cy.wrap(Array(todos_count).fill(0)).each((_, index) => {
      cy.sel("todo-input").type("Todo " + index);
      cy.sel("todo-add-form").submit();
    });

    cy.wrap(Array(completed_count).fill(0)).each((_, index) => {
      cy.sel("todo-complete-button").eq(0).click();
    });

    cy.wrap(Array(paused_count).fill(0)).each((_, index) => {
      cy.sel("todo-pause-button").eq(0).click();
    });

    cy.sel("progressbar-container")
      .wait(200) //wait for animation to completed
      .invoke("width")
      .then((totalWidth) => {
        cy.sel("progress-completed-div")
          .should("have.css", "width")
          .and("eq", `${totalWidth * (completed_count / todos_count)}px`);
        cy.sel("progress-completed-div")
          .invoke("width")
          .then((cWidth) => {
            cy.sel("progress-paused-div")
              .should("have.css", "width")
              .and(
                "eq",
                `${totalWidth * (paused_count / todos_count) + cWidth}px`
              );
          });
      });
  });
});
