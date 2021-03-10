describe("Home page test", () => {
    it("visit home page", () => {
        cy.visit("/");
        cy.findByText(/test/i).should("be.visible");
    });
});
