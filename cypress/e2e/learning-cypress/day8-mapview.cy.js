/// <reference types="cypress" />
describe('YVP Map View Functionalities', () => { 

    beforeEach(function() {
            cy.intercept('GET', 'https://dev.yvp.yusen-logistics.com/').as('pageLoaded');
            cy.visit('https://dev.yvp.yusen-logistics.com/');
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
            cy.contains('Map View').click({ force: true }).wait(3000)
    });

    it('Validates a particular shipment by Bill of Lading (BL) Number', () => { 
        const blNumber = '161049110964'; 

        cy.get('.searchTextDiv > .form-control').type(`${blNumber}{enter}`); 

        cy.get('.shipmentGridDetail').should('contain', blNumber).and('have.length', 1); 

    });

    it('Filters shipments by shipper and checks the Live Shipment List', () => { 

        cy.get(':nth-child(9) > :nth-child(1) > .col-sm-12').click(); 

        cy.get(':nth-child(9) > :nth-child(1) > .col-sm-12').contains(' Shipper').click(); 

        cy.get('.filterContent_7 > .form-control').type('SANSHOQTM'); 

        cy.get('.filterContent_7 > .form-control').each(item => { 

            cy.get('.filterScrollableDiv > .checkbox > .customLabel_checkbox').should('contain', 'SANSHOQTM'); 

        }); 
    
    }); 

    // it('Filters live shipments by ATD completed and ATA not completed', () => { 

    //     cy.get('.filter-ATD-ATA').click(); // Setup filter for ATD completed and ATA not completed 

    //     cy.get('.apply-filter').click(); 

    //     cy.get('.map-icon').should('have.class', 'vessel-icon').or('have.class', 'flight-icon'); 

    // }); 
    
    it('Verifies that data level switching works correctly', () => { 

        cy.get('.header > :nth-child(2) > :nth-child(1) > :nth-child(3)').contains('Container').click(); 
     
        cy.get('.header > :nth-child(2) > :nth-child(1) > :nth-child(2)').contains('Shipment').click(); 
     
    });

    it.only('Verifies the sorting functionality', () => { 
    
        cy.get('.header > :nth-child(2) > :nth-child(2) > :nth-child(3)').click();
    
        cy.get('.header > :nth-child(2) > :nth-child(2) > :nth-child(3)').click();

        cy.get('.header > :nth-child(2) > :nth-child(2) > :nth-child(4)').click();

        cy.get('.header > :nth-child(2) > :nth-child(2) > :nth-child(4)').click();

    });

    it('Validates the date filter functionality', () => { 

        cy.get('#dateFilterStartDate').type('01/12/2023'); 

        cy.get('#dateFilterEndDate').type('01/01/2024'); 

        cy.get('.shipmentGridDetail').should('not.be.empty'); 

    }); 
    
    it('Checks the functionality of clicking a vessel icon on the map', () => { 
        
        const blNumber = '4940276611'; 

        cy.get('.searchTextDiv > .form-control').type(`${blNumber}{enter}`); 

        cy.get('.shipmentGridDetail').should('contain', blNumber).and('have.length', 1); 

        cy.get('.shipmentGridDetail > :nth-child(1) > .shipmentGridDetailRow').click();

        cy.get('.mapboxgl-canvas-container > :nth-child(2)').should('be.visible');
        
    }); 

}); 