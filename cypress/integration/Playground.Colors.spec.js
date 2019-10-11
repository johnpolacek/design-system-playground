describe("Playground", function() {
  beforeEach(function() {
    cy.visit("/")
    cy.get("header").should("have.css", "background-color", "rgb(65, 105, 225)")
    cy.wait(20000)
    cy.contains("What body font do you like?").should("be.visible")
    cy.contains("Next").click()
    cy.wait(2000)
    cy.contains("What heading font do you like?").should("be.visible")
    cy.contains("Next").click()
    cy.wait(2000)
    cy.contains("Get a color scheme...").should("be.visible")
  })

  it("can set color scheme from preset, image, preset or go random", function() {
    const defaultPrimaryColor =
      Cypress.browser.name === "electron"
        ? "rgb(222, 162, 94)"
        : "rgb(222, 162, 95)"

    cy.get("#colorsPreset").select("tomato")
    cy.get("header").should("have.css", "background-color", "rgb(255, 99, 71)")

    cy.get("#colorsFromColor").type("abc123")
    cy.get("header").should("have.css", "background-color", "rgb(171, 193, 35)")

    // see uploadFile in support/commands, cheeseburger.js in fixtures
    cy.uploadFile("cheeseburger.jpg", "#colorsFromImage")
    cy.get("#colorsFromImage").trigger("change")
    cy.get("header").should("have.css", "background-color", defaultPrimaryColor)

    cy.contains("go random").click()
    cy.get("header").should(
      "not.have.css",
      "background-color",
      defaultPrimaryColor
    )

    cy.contains("Next").click()
    cy.wait(2000)
    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("primary").should("be.visible")
    cy.contains("secondary").should("be.visible")
    cy.contains("background").should("be.visible")
    cy.contains("text").should("be.visible")
  })

  it("can change, add or delete colors", function() {
    cy.contains("Next").click()
    cy.wait(2000)
    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("primary").should("be.visible")
    cy.contains("secondary").should("be.visible")
    cy.contains("background").should("be.visible")
    cy.contains("text").should("be.visible")

    // change primary color
    cy.get("input")
      .first()
      .clear()
      .type("#abc123")
    cy.get("header").should("have.css", "background-color", "rgb(171, 193, 35)")

    // add color
    cy.get("#addColorPreview").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    )
    cy.get("input[name=newColorName]").type("forest")
    cy.get("input[name=newColorValue]").type("228b22")
    cy.get("#addColor").click()

    cy.wait(2000)
    cy.contains("forest").should("be.visible")
    cy.contains("#228b22").should("be.visible")
    cy.contains("#228b22")
      .parent()
      .find("div")
      .should("have.css", "background-color", "rgb(34, 139, 34)")

    cy.get("input[name=newColorName]").should("have.value", "")
    cy.get("input[name=newColorValue]").should("have.value", "#")

    // delete color
    cy.contains("forest")
      .parent()
      .contains("×")
      .click()
    cy.contains("forest").should("not.be.visible")
    cy.contains("#228b22").should("not.be.visible")
  })

  it("can detect dark mode", function() {
    cy.get("#colorsFromColor").type("#fafafa")
    cy.get("header").should(
      "have.css",
      "background-color",
      "rgb(250, 250, 250)"
    )
    cy.get("main").should("have.css", "background-color", "rgb(0, 0, 0)")
    cy.get("main").should("have.css", "color", "rgb(255, 255, 255)")
    cy.get("footer").should("have.css", "background-color", "rgb(26, 26, 26)")
    cy.get("nav li").should("have.css", "background-color", "rgb(0, 0, 0)")
    cy.get("nav li span").should("have.css", "color", "rgb(250, 250, 250)")
    cy.get("#playground").should(
      "have.css",
      "background-color",
      "rgb(26, 26, 26)"
    )

    cy.wait(2000)
    cy.get("h3")
      .first()
      .should("have.css", "color", "rgb(255, 255, 255)")
    cy.get("input").should("have.css", "color", "rgb(255, 255, 255)")
    cy.get("input").should("have.css", "background-color", "rgb(0, 0, 0)")
    cy.get("select").should("have.css", "color", "rgb(255, 255, 255)")
    cy.get("select").should("have.css", "background-color", "rgb(0, 0, 0)")
  })
})
