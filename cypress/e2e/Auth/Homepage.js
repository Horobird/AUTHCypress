export class HomePage {
  manePage(url) {
    cy.visit(url);
  }
  getAuth(selectorEmail, email, selectorPassword, password) {
    cy.get(selectorEmail).type(email);
    cy.get(selectorPassword).type(password);
    cy.get(".css-1jphuq5").click();
  }
}
