
describe('Form Functionality Testing', () => {
    it('Should fill and submit the sign-up form with valid data', () => {
      cy.visit('registration.html');
      cy.get('input[id="customer.firstName"]').type('RAM');
      cy.get('input[id="customer.lastName"]').type('KUMAR');
      cy.get('input[id="customer.address.street"]').type('KAMAL NAGAR');
      cy.get('input[id="customer.address.city"]').type('ATHIPALLI');
      cy.get('input[id="customer.address.state"]').type('TAMILNADU');
      cy.get('input[id="customer.address.zipCode"]').type('567890');
      cy.get('input[id="customer.phoneNumber"]').type('9876543210');
      cy.get('input[id="customer.ssn"]').type('2330');
      
      // Get and increment the number for the username field
      cy.getAndIncrementUsernameNumber().then((nextNumber) => {
        const username = 'NK2330' + nextNumber;
        cy.get('input[id="customer.username"]').type(username).should('have.value', username);
      });
  
      cy.get('input[id="customer.password"]').type('KuMaR@_2330');
      cy.get('#repeatedPassword').type('KuMaR@_2330');
      cy.get('[type="submit"]').click({force: true});

       // Assert the successful submission message or any other success indicator
       cy.contains('Form submitted successfully').should('be.visible');

      cy.url().should('include', '/registration.html');
    });
  });
  