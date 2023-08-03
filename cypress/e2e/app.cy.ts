describe("App", () => {
  it("should display the friendly greeting", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("p").should("contain", "hello client");
  });
});
