describe('Image Processing Automation', () => {
    it('Resize, Convert to Grayscale, and Add Watermark', () => {
      // Visit the page where the image processing will take place
      cy.visit('https://example.com/image-processing');
  
      // Select the image element
      cy.get('.image-container img').as('image');
  
      // Resize the image
      cy.get('@image')
        .invoke('attr', 'width', '800')
        .invoke('attr', 'height', '600');
  
      // Convert the image to grayscale
      cy.get('@image').invoke('css', 'filter', 'grayscale(100%)');
  
      // Add a watermark
      cy.get('@image').after('<div class="watermark">Watermark</div>');
  
      // Assert that the watermark is added
      cy.get('.watermark').should('exist');
    });
  });
  