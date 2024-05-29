describe('Best Buy Website Test', () => {
  it('should add a product to the cart', () => {

    cy.on('uncaught:exception', (err, runnable) => {
      // Check if the error message contains the specific error codes
      if (err.message.includes('Minified React error #418') || err.message.includes('Minified React error #423')) {
        // Log the error
        console.error('React error occurred, skipping test:', err.message);
        // Skip the test
        return false;
      }
      // Return true to let the error propagate and fail the test
      return true;
    });
    
    // Visit the Best Buy homepage
    cy.visit('https://www.bestbuy.com/', { headers: { "Accept-Encoding": "gzip, deflate" } });

    cy.get('[lang="en"] > .country-selection > .us-link > img').click({force: true});
    // Search for a specific product category, e.g., "4K TVs"

    cy.get('input[class="search-input"]').click({force: true}).type('4K TVs').wait(2000).type('{enter}');

    // Wait for search results to load
    cy.get('input[class="search-input"]').should('be.visible');
    cy.wait(3000);

    // Select the first product from the search results and Wait for the product page to load
    cy.get('h4[class="sku-title"]').first().find('a').should('be.visible').click({force:true});

    // Attempt to add the product to the cart
    cy.get('[style="position:relative;display:block"] > .c-button').click({force:true});
    cy.wait(6000);

     // Handle modal dialog if it appears
     cy.get('.go-to-cart').then(modal => {
       if (modal.length > 0) {
        cy.get('.go-to-cart').click();
       }
     });

    });
});
