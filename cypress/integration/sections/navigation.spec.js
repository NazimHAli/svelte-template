/// <reference types="cypress" />

describe("Navigation displays properly", {
    baseUrl: "http://localhost:8080"
}, () => {
    it("ensure that no image failed to load", () => {
        cy.visit("/");
        cy.get("img").each((img) => expect(img[0].naturalWidth).to.not.equal(0));
        cy.screenshot({ capture: "viewport" });
    });
});
