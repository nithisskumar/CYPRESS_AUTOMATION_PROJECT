describe('My First Test Suite', () => {

  it('Visits the Cypress website and cross check whether the title matches', () => {
    // Visits the Cypress website
    cy.visit('https://www.cypress.io/');
    cy.scrollTo('bottom');
    cy.wait(3000);
    cy.scrollTo('top');
    cy.wait(3000);
    cy.get('[data-cy="header-contact-sales"]').click();
    cy.wait(3000);
    cy.get('#db1091f2-01b3-4ca8-b606-a6ace3240172_firstname').type('Nithiss');
    cy.wait(3000);
    cy.get('#db1091f2-01b3-4ca8-b606-a6ace3240172_lastname').type('Kumar');
    cy.wait(3000);
    cy.get('#db1091f2-01b3-4ca8-b606-a6ace3240172_email').type('nithiss@swiftant.com');
    cy.wait(3000);
    cy.get('#db1091f2-01b3-4ca8-b606-a6ace3240172_company').type('SWIFTANT IT SOLUTIONS');
    cy.wait(3000);
    cy.get('#db1091f2-01b3-4ca8-b606-a6ace3240172_jobtitle').type('Analyst');
    cy.wait(3000);
    cy.get('#db1091f2-01b3-4ca8-b606-a6ace3240172_support_message').type('Sample Testing Message text box');
    cy.wait(3000);
    cy.get('[data-cy="hubspot-modal-submit-contact-sales"]').click();
    //cy.get('[data-cy="hubspot-modal-cancel-contact-sales"]').click()
  });
});