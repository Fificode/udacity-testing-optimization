describe("Navigation Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });
    it("Navigate to Card Set Page", () => {
        cy.get("[data-cy='cardSetPage']").click();
        cy.get("[data-cy='card-page-container']").should("be.visible");
    });
    it("Navigate to Home Page", () => {
        cy.get("[data-cy='homePage']").click();
        cy.get("[data-cy='home-page']").should("be.visible");
    });
    it("Navigate to About Page", () => {
        cy.get("[data-cy='aboutPage']").click();
        cy.get("[data-cy='about-page']").should("be.visible");
    });
});
