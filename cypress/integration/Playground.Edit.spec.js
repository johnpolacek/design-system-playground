describe("Playground", function() {
  it("can edit fonts and colors", function() {
    cy.visit("/")
    cy.get("header").should("have.css", "background-color", "rgb(65, 105, 225)")
    cy.wait(6000)
    cy.contains("What body font do you like?").should("be.visible")
    cy.contains("Next").click()
    cy.contains("What heading font do you like?").should("be.visible")
    cy.contains("Next").click()
    cy.contains("Get a color scheme...").should("be.visible")
    cy.contains("Next").click()
    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("Next").click()

    cy.wait(1000)
    cy.get("#playground").should("have.css", "height", "0px")
    cy.get("header")
      .contains("play")
      .click()

    cy.contains("What body font do you like?").should("be.visible")
    cy.get("#selectBrowserFont").select("Georgia, serif")
    cy.contains("Next").click()

    cy.contains("What heading font do you like?").should("be.visible")
    cy.get("#selectBrowserFont").select("Arial, sans-serif")
    cy.contains("Next").click()

    cy.contains("Get a color scheme...").should("be.visible")
    cy.get("#colorsPreset").select("tomato")
    cy.contains("Next").click()

    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("Next").click()

    cy.wait(1000)
    cy.get("#playground").should("have.css", "height", "0px")
    cy.get("main section p").should(
      "have.css",
      "font-family",
      "Arial, sans-serif"
    )
    cy.get("main section h1").should(
      "have.css",
      "font-family",
      "Georgia, serif"
    )
    cy.get("header").should("have.css", "background-color", "rgb(255, 99, 71)")
  })
})
