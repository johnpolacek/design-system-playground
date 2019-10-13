describe("Playground", function() {
  beforeEach(function() {
    cy.visit("/")
  })

  it("requires name to save theme", function() {
    cy.wait(10000)
    cy.get("header")
      .contains("save")
      .click()

    cy.contains("Save Theme").should("be.visible")
    cy.get("button")
      .contains("Save")
      .should("be.disabled")
    cy.get("#themeName").type("a")
    cy.get("button")
      .contains("Save")
      .should("not.be.disabled")
    cy.get("button")
      .contains("Save")
      .click()

    cy.get("header")
      .contains("load")
      .click()

    cy.contains("Load Theme").should("be.visible")
    cy.get("button")
      .contains("a")
      .should("be.visible")
  })

  it("can cancel save theme", function() {
    cy.wait(15000)
    cy.get("header")
      .contains("save")
      .click()

    cy.contains("Save Theme").should("be.visible")
    cy.get("button")
      .contains("Cancel")
      .click()
    cy.contains("Save Theme").should("not.be.visible")
  })

  it("can suggest theme name", function() {
    cy.wait(15000)
    cy.get("header")
      .contains("save")
      .click()

    cy.contains("Save Theme").should("be.visible")
    cy.get("button")
      .contains("Yes")
      .click()
    cy.get("input#themeName").should("have.value", "Royal Blue")
    cy.get("button")
      .contains("Save")
      .click()

    cy.get("header")
      .contains("load")
      .click()

    cy.contains("Load Theme").should("be.visible")
    cy.get("button")
      .contains("Royal Blue")
      .should("be.visible")
  })
})
