export function fillField(selector, value) {
    return cy.get(selector).type("x").clear().type(value).should("have.value", value);
}

export function get(selector) {
    return cy.get(selector)
}

export function click(selector, ... args ) {
    return cy.get(selector).click( ... args)
}
