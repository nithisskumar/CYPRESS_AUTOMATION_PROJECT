describe('Amazon Login and Add to Cart Workflow Test', () => {
  beforeEach(() => {
    // Navigate to the product category (e.g., "laptops")
    cy.visit('https://www.amazon.com/s?k=laptops')
  })

  afterEach(() => {
    // Clear the cart after each test run
    cy.visit('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart')
    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click({ multiple: true })
  })

  it('Should add a product to the cart based on availability', () => {
    // Check availability of the first product
      if (cy.get('.s-result-list .s-result-item:nth-of-type(2)').should('contain', 'Add to cart')) {
        // If the product is available, add it to the cart
        cy.get('#a-autoid-1-announce').click();
        cy.wait(3000);
      } else {
        cy.get('#a-autoid-2-announce').click();
        cy.wait(3000);
      }
    // Check if the item was added successfully by navigating to the cart
    cy.get('.nav-cart-icon').click({force: true});
  })
})
