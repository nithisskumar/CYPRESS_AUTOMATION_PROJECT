describe('', () => {

    it('Interacting with UI', () => {
      // Visits the Cypress website
      cy.visit('https://www.cypress.io/');
      cy.get('[data-cy="header-contact-sales"]').click();
      cy.wait(3000);
      cy.get('input[placeholder="First name"]').type('Nithiss');
      cy.wait(3000);
      cy.get('input[name="firstname"]').clear();
    });
});