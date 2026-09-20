describe("Navigation Functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:61642/");
    });
    it("Navigate to Card Set Page", () => {
        cy.get("[data-cy='cardSetPage']").click();
    });
    it("Navigate to Home Page", () => {
        cy.get("[data-cy='homePage']").click();
    });
    it("Navigate to About Page", () => {
        cy.get("[data-cy='aboutPage']").click();
    });
});
