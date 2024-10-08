/// <reference types="cypress" />

describe(
    "Check some performance metrics",
    {
        baseUrl: "https://svelte-template-prod.vercel.app/",
    },
    () => {
        it("check page load time", () => {
            cy.visit("/", {
                onBeforeLoad: (win) => {
                    win.performance.mark("start-loading");
                },
                onLoad: (win) => {
                    win.performance.mark("end-loading");
                },
            })
                .its("performance")
                .then((p) => {
                    p.measure("pageLoad", "start-loading", "end-loading");
                    const measure = p.getEntriesByName("pageLoad")[0];

                    assert.isAtMost(measure.duration, 1000);
                });
        });

        it("check image load time", () => {
            // finds performance entry for an image the page is loading
            const findImage = (win) => {
                const isOurImage = (x) =>
                    x.name.endsWith(
                        "images/colorful-gradient-abstract-logo/3410492.jpg"
                    );
                const foundImages = win.performance
                    .getEntriesByType("resource")
                    .filter(isOurImage);

                expect(foundImages).to.have.length(1);

                return foundImages[0];
            };

            cy.visit("/");

            // retries until window has performance object
            // with information about loaded image resource
            cy.window().should(findImage);

            // now that the image is there for sure, let's look at its duration
            cy.window().then(findImage).its("duration").should("be.lt", 400);
        });

        it("ensure max load time for images", () => {
            cy.visit("/")
                .its("performance")
                .then((p) => {
                    const imgs = p
                        .getEntriesByType("resource")
                        .filter((x) => x.initiatorType === "img");
                    const slowestImg = imgs.reduce(
                        (p, c) => (c.duration > p.duration ? c : p),
                        { duration: 0 }
                    );

                    assert.isAtMost(
                        slowestImg.duration,
                        400,
                        `image '${slowestImg.name}' should be loaded in reasonable time`
                    );
                });
        });

        it("ensure that no image failed to load", () => {
            cy.visit("/");
            cy.get(".my-4");

            cy.get("img").each((img) =>
                expect(img[0].naturalWidth).to.not.equal(0)
            );
        });
    }
);