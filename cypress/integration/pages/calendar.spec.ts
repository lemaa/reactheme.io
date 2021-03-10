describe("Calendar page test", () => {
    it("visit calendar page", () => {
        cy.visit("/");
        cy.findByText(/test/i).should("be.visible");
    });
});
