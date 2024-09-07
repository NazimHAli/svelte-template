/// <reference types="cypress" />

const testConfig = {
    baseUrl: "http://localhost:8080",
    viewportWidth: 1024,
    viewportHeight: 768,
};

describe("Save screenshot", testConfig, () => {
    it("homepage screenshot", () => {
        cy.visit("/");
        cy.get("[data-test=menu-home]").click();
        cy.screenshot({ capture: "viewport" });
    });
});