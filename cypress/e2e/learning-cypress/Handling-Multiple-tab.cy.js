describe('Open The New Tab in Same Tab ', () => {
    
    cy.visit('https://dev.yvp.yusen-logistics.com/auth/login');

});
    
    // cy.visit('https://www.cypress.io/');
    //it('Open The New Tab in Same Tab 1', () => {
    //    cy.contains('Log In').invoke('removeAttr', 'target').click();
    //})

    //it('Open The New Tab in Same Tab 2', () => {
    //    cy.contains('Why Cypress').invoke('attr', 'target' , '_self').click();
    //})

// // shipment Orgin and Shipment Desination

cy.get('.filterContent_2 > .checkbox > .fa').click();
cy.get('.filterContent_2 > :nth-child(2) > .customLabel_checkbox > .checkmark').click();
cy.get('.filterScrollableDiv > :nth-child(1) > .customLabel_checkbox > .checkmark').click();
cy.contains('Shipment Destination').scrollIntoView().wait(1000);
cy.get('.filterContent_5 > .checkbox > .fa').click();
cy.get('.filterContent_5 > :nth-child(2) > .customLabel_checkbox > .checkmark').click();
cy.get('.filterContent_5 > .filterScrollableDiv > :nth-child(31) > .customLabel_checkbox > .checkmark').click();


// Alert Type

cy.get(':nth-child(11) > :nth-child(1) > .col-sm-12').scrollIntoView().wait(1000);
// cy.get('.filterContentSection > :nth-child(11) > :nth-child(1)').click();
cy.get('.filterContent_9 > :nth-child(2) > .customLabel_checkbox > .checkmark').click();
cy.get(':nth-child(3) > .customLabel_checkbox > .checkmark').click();

// Comments:
// Asserts the background color red - rgb(211, 47, 47)
// Asserts the background color yellow - rgb(255, 201, 51)
// Asserts the background color green - rgb(69, 179, 136)
cy.get('.milestoneSuccessStatusDot').should('have.css', 'background-color', 'rgb(211, 47, 47)');

// // Date Range
cy.contains('Date Range').scrollIntoView().wait(1000);
cy.get('.filterContent_13 > :nth-child(1) > .form-control').select('min_atd');
// // Comments:
// //  ETD - min_etd
// //  ETA - max_eta
// //  ATD - min_atd
// //  ATA - max_ata
cy.get('#dateFilterStartDate').type('07/01/2023');
cy.get('#dateFilterEndDate').type('08/30/2023');
// // Assuming the filtered results are displayed in a list of items
// // You can assert that each item's date is within the specified range
cy.get('.shipmentGridDetail').each((item) => {
    cy.wrap(item).find('#dateFilterStartDate').should('be.greaterThan', '07/01/2023');
    cy.wrap(item).find('#dateFilterEndDate').should('be.lessThan', '08/30/2023');
});


afterEach(() => {
    // Clear the cart after each test run
    cy.visit('https://www.amazon.com/gp/cart/view.html')
    cy.get('[name="proceedToRetailCheckout"]').click()
    cy.get('[data-action="delete"]').click({ multiple: true })
  })
   // Log into the user account (replace placeholders with actual credentials)
   cy.get('#nav-link-accountList').click()
   cy.get('#ap_email').type('your_email@example.com')
   cy.get('#continue').click()
   cy.get('#ap_password').type('your_password')
   cy.get('#signInSubmit').click()