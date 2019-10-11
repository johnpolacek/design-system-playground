describe("Playground", function() {
  it("can edit fonts and colors", function() {
    cy.visit("/")
    cy.wait(10000)
    cy.get("header").should("have.css", "background-color", "rgb(65, 105, 225)")
    cy.contains("What body font do you like?").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)
    cy.contains("What heading font do you like?").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)
    cy.contains("Get a color scheme...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)
    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)

    cy.wait(1000)
    cy.get("#playground").should("have.css", "height", "0px")
    cy.get("header")
      .contains("play")
      .click()

    cy.contains("What body font do you like?").should("be.visible")
    cy.get("#selectBrowserFont").select("Georgia, serif")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("What heading font do you like?").should("be.visible")
    cy.get("#selectBrowserFont").select("Arial, sans-serif")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("Get a color scheme...").should("be.visible")
    cy.get("#colorsPreset").select("tomato")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)

    cy.wait(1000)
    cy.get("#playground").should("have.css", "height", "0px")
    cy.get("p#bodyText").should(
      "have.css",
      "font-family",
      "Georgia, serif"
    )
    cy.get("main section h2").should(
      "have.css",
      "font-family",
      "Arial, sans-serif"
    )
    cy.get("header").should("have.css", "background-color", "rgb(255, 99, 71)")
  })
})
