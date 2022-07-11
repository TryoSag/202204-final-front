describe("Given the Pet's House app", () => {
  describe("When the user creates a project and then deletes it", () => {
    it("Then the list should show the new project and then hide it", () => {
      const username = "testCypress";
      const password = "testCypress";

      cy.visit("https://pets-house-albert-sagol.netlify.app/login");

      cy.get("label").contains("Username").type(username);
      cy.get("label").contains("Password").type(password);

      cy.get("button").contains("Login").click();

      cy.get("h1").should("contain.text", "Pet's");

      cy.find("img").contains("have.attr", "alt", "Dogs icon").click();
    });
  });
});
