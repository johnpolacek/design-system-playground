describe("Playground", function() {
  beforeEach(function() {
    cy.visit("/")
    cy.wait(6000)
  })

  it("can generate random theme", function() {
    cy.get("header h1").should(
      "have.css",
      "font-family",
      '"avenir next", avenir, helvetica, arial, sans-serif'
    )
    cy.get("main p#bodyText").should(
      "have.css",
      "font-family",
      '"avenir next", avenir, helvetica, arial, sans-serif'
    )
    cy.get("header").should("have.css", "background-color", "rgb(65, 105, 225)")
    cy.get("header")
      .contains("random")
      .click()
    cy.get("header h1").should(
      "not.have.css",
      "font-family",
      '"avenir next", avenir, helvetica, arial, sans-serif'
    )
    cy.get("main p#bodyText").should(
      "not.have.css",
      "font-family",
      '"avenir next", avenir, helvetica, arial, sans-serif'
    )
    cy.get("header").should(
      "not.have.css",
      "background-color",
      "rgb(65, 105, 225)"
    )
  })
})
