describe("Calendar page test", () => {
    it("visit calendar page", () => {
        cy.visit("/");
        cy.findByText(/Calendar/i).should("be.visible");
    });
});
