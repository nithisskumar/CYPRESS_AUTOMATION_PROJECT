describe('User Login Test', () => {
    beforeEach(() => {
        cy.visit('https://dev.yvp.yusen-logistics.com/');
        cy.get('.cookie-enable').should('be.visible').click(); // Handling the cookie popup (if present)
    });

    it('Should login with valid credentials', () => {
        cy.fixture('loginCredentials').then((users) => {
            users.forEach((user) => {
                cy.get('#username').type(user.username);
                cy.get('#pass').type(user.password);
                cy.get('.button').click();
                cy.reload();  // Reset state for next iteration
            });
        });
    });

    it('Should retry login with valid credentials on failure', () => {
        cy.fixture('loginCredentials').then((users) => {
            users.forEach((user) => {
                cy.get('#username').type(user.username);
                cy.get('#pass').type(user.password);
                cy.get('.button').click();
                cy.wait(5000); // Wait for a reasonable time for the login process
                cy.url().then((url) => {
                    if (!url.includes('/home')) {
                        cy.log('Login failed. Retrying...');
                        cy.reload();
                    } else {
                    // Login successful
                        cy.log('Login successful.');
                        cy.get('#userDet > .menu-icon').click({force: true});
                        cy.get('.signoutImage').click({force: true});
                        cy.wait(5000); // Wait for a reasonable time for the logout process
                    }
                    cy.reload();  // Reset state for next iteration
                });
            });
        });
    });
});
