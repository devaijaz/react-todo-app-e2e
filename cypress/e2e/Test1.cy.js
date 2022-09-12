context("Todos Tests", () => {
  it("Shoud not add todo if no input", () => {
    cy.visit("/");
    cy.sel("todo-add-form").submit();
    cy.sel("pending-todos-list").children().should("have.length", 0);
  });
  it("Shoud add a todo", () => {
    cy.visit("/");
    cy.sel("todo-input").type("First Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Second Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Third Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("pending-todos-list").children().should("have.length", 3);
    cy.sel("paused-todos-list").children().should("have.length", 0);
    cy.sel("completed-todos-list").children().should("have.length", 0);
  });
  it("Shoud pause/resume and complete pending todos", () => {
    cy.visit("/");
    cy.sel("todo-input").type("First Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Second Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Third Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("pending-todos-list").children().should("have.length", 3);

    cy.sel("todo-pause-button").eq(0).click();
    cy.sel("todo-pause-button").eq(0).click();

    cy.sel("pending-todos-list").children().should("have.length", 1);
    cy.sel("paused-todos-list").children().should("have.length", 2);
    cy.sel("completed-todos-list").children().should("have.length", 0);

    cy.sel("todo-complete-button").eq(0).click();
    cy.sel("pending-todos-list").children().should("have.length", 0);
    cy.sel("paused-todos-list").children().should("have.length", 2);
    cy.sel("completed-todos-list").children().should("have.length", 1);

    cy.sel("todo-resume-button").eq(0).click();
    cy.sel("pending-todos-list").children().should("have.length", 1);
    cy.sel("paused-todos-list").children().should("have.length", 1);
    cy.sel("completed-todos-list").children().should("have.length", 1);
  });

  it("Shoud delete todos", () => {
    cy.visit("/");
    cy.sel("todo-input").type("First Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Second Todo");
    cy.sel("todo-add-form").submit();
    cy.sel("todo-input").type("Third Todo");
    cy.sel("todo-add-form").submit();

    cy.sel("todo-pause-button").eq(0).click();
    cy.sel("todo-complete-button").eq(0).click();

    cy.sel("pending-todos-list").children().should("have.length", 1);
    cy.sel("paused-todos-list").children().should("have.length", 1);
    cy.sel("completed-todos-list").children().should("have.length", 1);

    cy.sel("todo-remove-button").eq(0).click();
    cy.sel("pending-todos-list").children().should("have.length", 0);
    cy.sel("paused-todos-list").children().should("have.length", 1);
    cy.sel("completed-todos-list").children().should("have.length", 1);

    cy.sel("todo-remove-button").eq(0).click();
    cy.sel("pending-todos-list").children().should("have.length", 0);
    cy.sel("paused-todos-list").children().should("have.length", 1);
    cy.sel("completed-todos-list").children().should("have.length", 0);

    cy.sel("todo-resume-button").eq(0).click();
    cy.sel("todo-remove-button").eq(0).click();
    cy.sel("pending-todos-list").children().should("have.length", 0);
    cy.sel("paused-todos-list").children().should("have.length", 0);
    cy.sel("completed-todos-list").children().should("have.length", 0);
  });
});
