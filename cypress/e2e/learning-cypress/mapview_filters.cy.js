/// <reference types="cypress" />
describe('website', () => {
    //  forEach(() => {
        it('url', () => {
            cy.intercept('GET', 'https://uat.yvp.yusen-logistics.com/').as('pageLoaded');
            cy.visit('https://uat.yvp.yusen-logistics.com/');
            // cy.title().should('eq','yusen Vantage | Performance')
            cy.wait('@pageLoaded');
            // Handling the cookie popup (if present)
            cy.get('.cookie-enable').should('be.visible').wait(1000)
            cy.get('.cookie-enable').click();

            // Login
            cy.get('#username').type('nithiss_prod');
            cy.get('#pass').type('Pass%4321').should('be.visible');
            cy.get('.button').click().wait(4000);

            // Selecting the dropdown value
            cy.get('.input-group > .form-control').select('IPRO').wait(3000);

            // Hover over the parent elements to make 'Map View' link visible
            cy.get('.menuLvl1Name[aria-controls="collapse_1"]').eq(0).trigger('mouseover', { force: true }).wait(1000);
            cy.get('.menuLvl1Name[aria-controls="collapse_0"]').eq(0).trigger('mouseover', { force: true }).wait(1000);

            // Click on the 'Map View' link
            cy.contains('Map View').click({ force: true }).wait(3000);

            cy.get('.filterContent_2 > .form-control').type('HKHKG');

            //cy.get(':nth-child(1) > .shipmentGridRowDetail > :nth-child(1) > .blNo').click();
            
        })

    });