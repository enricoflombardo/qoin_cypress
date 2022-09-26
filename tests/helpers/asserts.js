export function shouldContainText(selector, ... args) {
    cy.get(selector).should('contains', value)
}