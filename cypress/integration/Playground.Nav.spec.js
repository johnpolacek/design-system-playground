describe("Playground", function() {
  beforeEach(function() {
    cy.visit("/")
  })

  it("can navigate to font, color, theme and ui", function() {
    cy.get("h2")
      .contains("Font Families")
      .should("be.visible")
    cy.get("h2")
      .contains("Type Scale")
      .should("be.visible")
    cy.get("nav")
      .contains("COLOR")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("not.exist")
    cy.get("h2")
      .contains("Type Scale")
      .should("not.exist")
    cy.get("h2")
      .contains("Color Palette")
      .should("be.visible")
    cy.get("nav")
      .contains("THEME")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("not.exist")
    cy.get("h2")
      .contains("Type Scale")
      .should("not.exist")
    cy.get("h2")
      .contains("Color Palette")
      .should("not.exist")
    cy.get("h2")
      .contains("Your Theme Object")
      .should("be.visible")
    cy.get("nav")
      .contains("UI")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("not.exist")
    cy.get("h2")
      .contains("Type Scale")
      .should("not.exist")
    cy.get("h2")
      .contains("Color Palette")
      .should("not.exist")
    cy.get("h2")
      .contains("Your Theme Object")
      .should("not.exist")
    cy.get("a")
      .contains("Theme UI Docs")
      .should("be.visible")
    cy.get("nav")
      .contains("FONT")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("be.visible")
    cy.get("h2")
      .contains("Type Scale")
      .should("be.visible")
    cy.get("h2")
      .contains("Color Palette")
      .should("not.exist")
    cy.get("h2")
      .contains("Your Theme Object")
      .should("not.exist")
    cy.get("a")
      .contains("Theme UI Docs")
      .should("not.exist")
  })
})
