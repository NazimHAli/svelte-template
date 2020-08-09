/// <reference types="cypress" />

const testConfig = {
    baseUrl: "http://localhost:8080",
    viewportWidth: 1024,
    viewportHeight: 768,
};

describe(
    "Test menu navigation hash change and CSS class active",
    testConfig,
    () => {
        before(() => {
            cy.visit("/");
        });

        it("clicking on home link", () => {
            cy.get("[data-test=menu-home]")
                .click()
                .should("have.class", "active");
            cy.hash().should("eq", "#/");
        });

        it("clicking on about link", () => {
            cy.get("[data-test=menu-about]")
                .click()
                .should("have.class", "active");
            cy.hash().should("eq", "#/about");
        });

        it("clicking on contact link", () => {
            cy.get("[data-test=menu-contact]")
                .click()
                .should("have.class", "active");
            cy.hash().should("eq", "#/contact");
        });

        it("clicking on meow link", () => {
            cy.get("[data-test=menu-meow]")
                .click()
                .should("have.class", "active");
            cy.hash().should("eq", "#/meow");
        });

        it("clicking on products link", () => {
            cy.get("[data-test=menu-products]")
                .click()
                .should("have.class", "active");
            cy.hash().should("eq", "#/products");
        });
    }
);
