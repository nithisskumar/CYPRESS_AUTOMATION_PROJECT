describe('Amazon Search Functionality Test', () => {
    beforeEach(function() {
        // Visit Amazon website
        cy.visit('https://www.amazon.in');
    });

    it('Validate UI State on Amazon' , () => {
      // Type the search query into the search bar and submit the search
      cy.get('.nav-search-field').click().type('earbuds{enter}');
      
      cy.wait(3000);

      // Clicks on the "Sort by" dropdown
      cy.get('#a-autoid-0-announce').click(); 

      // Selects "Price: Low to High"
      cy.get('#s-result-sort-select_2').contains('Price: High to Low').click();

      // Click on the first search result without opening in a new tab
      cy.get('.s-result-list .s-result-item:nth-of-type(2)')
      .click({ force: true })

      // Click on the first search result to add it in the cart
      cy.get('#a-autoid-30-announce').click();
      cy.wait(3000);

      // Added the product to the cart and click and navigate to cart
      cy.get('.nav-cart-icon').click({force: true});
      cy.wait(6000);
      
      // Assuming the class for product title in the cart page
      cy.get('.sc-product-title').should('exist')
      // Assuming the class for product price in the cart page 
      cy.get('.sc-product-price').should('exist')
      // Verify checkout button
      cy.get('#sc-buy-box-ptc-button').contains('Proceed to Buy').should('exist');
    }); 

    //5.Handling and Verifying Dynamic Content:
    it('Handling and Verifying Dynamic Content', () => {

      // Navigate to 'Deals of the Day' or 'Lightning Deals'
      cy.get('[href="/deals?ref_=nav_cs_gb"]').click();
      // cross confirm whether it navigates to Today's Deal
      cy.get('.a-size-extra-large').contains("Today's Deals");
      // Click on an item
      cy.get('#slot-7 > #dealsGridLinkAnchor > [data-testid="grid-widget"] > #grid-main-container > .Grid-module__gridSection_1SEJTeTsU88s6aVeuuekAp > [data-testid="grid-deals-container"] > :nth-child(1)').click().wait(2000);
      //cy.get('#cbpctch7312301952872855 > .a-checkbox > label > .a-icon').click();
      // Validate dynamic elements
      cy.get('#corePriceDisplay_desktop_feature_div > .a-spacing-none > .a-size-large').should('contain', '-25%');
  });

});