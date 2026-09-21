describe("Form Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });
    //Happy path to create set form
    it("Create Succesful Set Form", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='toggle_form']").click();
        cy.get("[data-cy='set_form']")
            .find("input[name='titleInput']")
            .type("JavaScript");
        cy.get("[data-cy='set_form']").find("input[type='submit']").click();
        cy.get("[data-cy='5']").should("be.visible");
    });
    //Unhappy path to create set form
    it("Create Failed Set Form", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='toggle_form']").click();
        cy.get("[data-cy='set_form']").find("input[type='submit']").click();
        cy.get(".error").should("be.visible");
    });
    // Happy path to add card form
    it("Add Succesful Card Form", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='1']").click();
        cy.get("[data-cy='toggle_form']").click();
        cy.get("[data-cy='card_form']")
            .find("input[name='termInput']")
            .type("JavaScript");
        cy.get("[data-cy='card_form']")
            .find("input[name='descriptionInput']")
            .type("JavaScript is an object oriented programming language");
        cy.get("[data-cy='card_form']").find("input[type='submit']").click();
        cy.get(".innerCard")
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
        cy.get("[data-cy='card_form']").find("input[type='submit']").click();
        cy.get(".error").should("be.visible");
    });
});
