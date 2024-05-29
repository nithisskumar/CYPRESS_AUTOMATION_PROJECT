/// <reference types = 'Cypress'>

describe('File Upload Test', () => {
    it('uploads a file successfully', () => {
      // Visit the webpage with the file upload form
      cy.visit('index.html');
  
      // Find the file input element and attach a file to it
      cy.get('#fileInput').attachFile('../../sonar_Qube_for_data_view.jpg');
  
      // Submit the form
      cy.get('#submitBtn').click();
  
      // Check if the upload success message is visible
      cy.contains('Cypress errored trying to serve this file from your system:').should('be.visible');
    });
  });
  