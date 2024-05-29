describe('My First Test Suite', () => {

  it('Visits the Cypress website and cross check whether the title matches', () => {
    // Visits the Cypress website
    cy.visit('https://www.cypress.io/');
    cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress');
    cy.get('[data-cy="header-login"]').click();
  });

  it('Visits the Cypress website and cross check whether the title does not matches', () => {
    // Visits the Cypress website
    cy.visit('https://www.cypress.io/');
    cy.title().should('eq', 'Testing Frameworks for Javascript | Cypress');
  });
});
