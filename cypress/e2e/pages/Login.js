export class Login {
  navPage(selectorMenu, selectorLogOut) {
    cy.get(selectorMenu).click();
    cy.get(selectorLogOut).click();
  }
}
