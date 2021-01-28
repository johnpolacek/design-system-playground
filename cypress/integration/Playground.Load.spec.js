describe("Playground", function() {
  beforeEach(function() {
    cy.visit("/")
  })

  it("can load preset theme", function() {
    cy.wait(10000)
    cy.get("header")
      .contains("load")
      .click()
    cy.contains("Load Theme").should("be.visible")
    cy.contains("salmon").click()
    cy.get("header").should(
      "have.css",
      "background-color",
      "rgb(255, 140, 105)"
    )
    cy.get("main section p#bodyText").should(
      "have.css",
      "font-family",
      "Lora, serif"
    )
    cy.get("main section h2").should(
      "have.css",
      "font-family",
      '"Istok Web", sans-serif'
    )
  })

  it("can save, load and delete themes", function() {
    cy.wait(10000)
    cy.contains("What body font do you like?").should("be.visible")
    cy.get("#selectWebFont").select("Arimo")
    cy.contains("Next").click()
    cy.wait(1000)

    cy.contains("What heading font do you like?").should("be.visible")
    cy.get("#selectWebFont").select("Tinos")
    cy.contains("Next").click()
    cy.wait(1000)

    cy.contains("Get a color scheme...").should("be.visible")
    cy.get("#colorsPreset").select("indigo")
    cy.contains("Next").click()
    cy.wait(1000)

    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(1000)

    cy.wait(1000)

    cy.get("header")
      .contains("save")
      .click()

    cy.wait(1000)

    cy.contains("Save Theme").should("be.visible")
    cy.get("#themeName").type("Beep Boop Bop")
    cy.get("button")
      .contains("Save")
      .click()

    cy.reload()
    cy.wait(10000)

    cy.get("header")
      .contains("load")
      .click()

    cy.contains("Beep Boop Bop").click()
    cy.get("header").should("have.css", "background-color", "rgb(75, 0, 130)")
    cy.get("main section p#bodyText").should(
      "have.css",
      "font-family",
      "Arimo, sans-serif"
    )
    cy.get("main section h2").should("have.css", "font-family", "Tinos, serif")
  })

  it("can cancel load theme", function() {
    cy.wait(10000)
    cy.get("header")
      .contains("load")
      .click()
    cy.contains("Load Theme").should("be.visible")
    cy.get("button")
      .contains("Cancel")
      .click()
    cy.contains("Load Theme").should("not.exist")
  })
})
