describe("Navigation Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });
    it("Navigate to Card Set Page", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get(".cardPageContainer").should("be.visible");
    });
    it("Navigate to Home Page", () => {
        cy.get("[data-cy='homePage']").click();
        cy.get(".homeContainer").should("be.visible");
    });
    it("Navigate to About Page", () => {
        cy.get("[data-cy='aboutPage']").click();
        cy.get(".aboutContainer").should("be.visible");
    });
});
