describe('Amazon Login and Add to Cart Workflow Test', () => {
    it('Should log into a user account, add a product to the cart, and check if the item was added successfully', () => {
        // Log into the user account (replace placeholders with actual credentials)
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type('arav.sankar@gmail.com')
        cy.get('#continue').click()
        cy.get('#ap_password').type('anand@123')
        cy.get('#signInSubmit').click()
        // Add a product to the cart
        cy.get('.s-result-list .s-result-item').first().find('a').click()
        cy.get('.a-button-text').click();
  });

    it('Filling the sign Up Form in the Amazon' , () => {
        cy.get('.nav-cart-icon').click({ force: true }).wait(3000);
        cy.get('#a-autoid-1-announce > .a-size-base-plus').click({ force: true }).wait(3000);
        cy.get('#ap_customer_name').type('Nithiss Kumar').wait(3000);
        cy.get('#ap_email').type('9445226316').wait(3000);
        cy.get('.country-display-text').invoke('text').then(text => {
          const newText = text.replace('US +1', '+91');
          cy.get('.country-display-text').invoke('text', newText);
        });
        cy.get('#ap_password').type('NKumar@2330');
        cy.get('#ap_password_check').type('NKumar@2330');
        cy.get('#continue').click();
        });
});


describe('Network Handling Example', () => {
  beforeEach(() => {
    // Intercept network requests
    cy.intercept('GET', '**/todos/*').as('getTodos')
  })

  it('Loads todos from API', () => {
    // Visit the page where the API request is made
    cy.visit('/')

    // Wait for the network request to complete
    cy.wait('@getTodos').then((interception) => {
      // Assert that the request was successful
      expect(interception.response.statusCode).to.equal(200)

      // Get the response body
      const todos = interception.response.body

      // Assert on the response body or perform any other actions
      expect(todos).to.have.length.above(0)
    })
  })

  it('Handles failed network request', () => {
    // Intercept network requests and return an error response
    cy.intercept('GET', '**/todos/*', {
      statusCode: 500,
      body: 'Server Error',
      headers: {
        'x-custom-header': 'custom-header-value'
      }
    }).as('getTodosWithError')

    // Visit the page where the API request is made
    cy.visit('/')

    // Wait for the network request to complete
    cy.wait('@getTodosWithError').then((interception) => {
      // Assert that the request failed
      expect(interception.response.statusCode).to.equal(500)

      // Get the response body
      const errorMessage = interception.response.body

      // Assert on the error message or perform any other actions
      expect(errorMessage).to.equal('Server Error')

      // Assert on custom headers
      expect(interception.response.headers).to.have.property('x-custom-header', 'custom-header-value')
    })
  })

  it('Stubs network request', () => {
    // Stub network requests with a predefined response
    const todos = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true }
    ]
    cy.intercept('GET', '**/todos/*', {
      statusCode: 200,
      body: todos
    }).as('getTodosStub')

    // Visit the page where the API request is made
    cy.visit('/')

    // Wait for the network request to complete
    cy.wait('@getTodosStub').then((interception) => {
      // Assert that the request was successful
      expect(interception.response.statusCode).to.equal(200)

      // Assert on the stubbed response body
      expect(interception.response.body).to.deep.equal(todos)
    })

  })
})


