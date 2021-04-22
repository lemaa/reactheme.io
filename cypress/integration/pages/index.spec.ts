describe("Home page test", () => {
    it("visit home page", () => {
        cy.visit("/");
        cy.findByText(/Calendar/i).should("be.visible");
    });
});
