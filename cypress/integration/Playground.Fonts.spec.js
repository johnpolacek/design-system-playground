describe("Playground", function() {
  beforeEach(function() {
    cy.visit("/")
  })

  it("can set browser fonts", function() {
    cy.wait(9000)
    cy.contains("What body font do you like?").should("be.visible")
    cy.get("#selectBrowserFont").select("Georgia, serif")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("What heading font do you like?").should("be.visible")
    cy.get("#selectBrowserFont").select("Arial, sans-serif")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("Get a color scheme...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)

    cy.wait(1000)
    cy.get("main section h2").should(
      "have.css",
      "font-family",
      "Arial, sans-serif"
    )
    cy.get("main section p#bodyText").should(
      "have.css",
      "font-family",
      "Georgia, serif"
    )
  })

  it("can set web fonts", function() {
    cy.wait(9000)
    cy.contains("What body font do you like?").should("be.visible")
    cy.get("#selectWebFont").select("Vollkorn")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("What heading font do you like?").should("be.visible")
    cy.get("#selectWebFont").select("Yantramanav")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("Get a color scheme...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)

    cy.contains("Here are your colors...").should("be.visible")
    cy.contains("Next").click()
    cy.wait(500)

    cy.wait(1000)

    cy.get("main section p#bodyText").should(
      "have.css",
      "font-family",
      "Vollkorn, serif"
    )
    cy.get("main section h2").should(
      "have.css",
      "font-family",
      "Yantramanav, sans-serif"
    )
  })

  it("can set random fonts", function() {
    cy.wait(9000)
    cy.get("header h1").should(
      "have.css",
      "font-family",
      '"avenir next", avenir, helvetica, arial, sans-serif'
    )
    cy.contains("What body font do you like?").should("be.visible")
    cy.contains("go random").click()
    cy.get("header h1").should(
      "not.have.css",
      "font-family",
      '"avenir next", avenir, helvetica, arial, sans-serif'
    )
  })
})
