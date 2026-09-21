describe("Form Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });
    //Happy path to create set form
    it("Create Succesful Set Form", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='toggle_form']").click();
        cy.get('[data-cy="set-title"]').type("JavaScript");
        cy.get('[data-cy="set-submit"]').click();
        cy.get("[data-cy='5']").should("be.visible");
    });
    //Unhappy path to create set form
    it("Create Failed Set Form", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='toggle_form']").click();
        cy.get('[data-cy="set-submit"]').click();
        cy.get('[data-cy="form-error"]').should("be.visible");
    });
    // Happy path to add card form
    it("Add Succesful Card Form", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='1']").click();
        cy.get("[data-cy='toggle_form']").click();
        cy.get("[data-cy='term_input']").type("JavaScript");
        cy.get("[data-cy='description_input']").type(
            "JavaScript is an object oriented programming language",
        );
        cy.get("[data-cy='add_card_btn']").click();
        cy.get("[data-cy='inner_card']")
            .should("contain", "JavaScript")
            .and(
                "contain",
                "JavaScript is an object oriented programming language",
            );
    });
    //Unhappy path to add card form
    it("Create Failed Set Form", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='1']").click();
        cy.get("[data-cy='toggle_form']").click();
        cy.get("[data-cy='add_card_btn']").click();
        cy.get('[data-cy="form-error"]').should("be.visible");
    });
});
