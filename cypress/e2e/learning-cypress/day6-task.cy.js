/// <reference types = 'Cypress'>

describe('TESTING API USER', () => {
  it('get users', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public-api/users',
      headers: {
        Authorization: 'Bearer 5962aecb5555b19fb60255a472318bbe86e240a219879ca95ace963a487cfa1d'
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.meta.pagination.limit).to.eq(10)
    })
  })

  it('get users by specific id', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/posts/122493',
      headers: {
        Authorization: 'Bearer 5962aecb5555b19fb60255a472318bbe86e240a219879ca95ace963a487cfa1d'
      }
    }).then((res1) => {
      expect(res1.body.user_id).to.eq(10)
    })
  })

  // it('get users', () => {
  //   const headers = {
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJOaXRoaXNzX3Byb2QiLCJjbGllbnRObyI6IkZDTSIsInVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMzcuMyIsImVudiI6IkRFViIsInNlc3Npb25JZCI6IjZlNjY2YWYyLTc4NDMtNDZkZS1iZWNmLTdmZTg5MGU2YWQxYiIsImlhdCI6MTcxNTc3MTI0MSwiZXhwIjoxNzE1NzczMDQxfQ.SrNGfeSZhPaMtUVYAcelh_nEgqj2tHPzTv7bYic2LMc',
  //     'Content-Type': 'application/json',
  //     'client_no': 'KRC',
  //     'Connection': 'keep-alive',
  //   };

  //   cy.intercept('POST', 'https://dev.yvp.yusen-logistics.com/sv/api/refreshLiveShipments', (req) => {
  //     req.headers = headers;
  //   }).as('getShipment');

  //   cy.wait('@getShipment', { timeout: 50000 })
  //     .its('response.statusCode')
  //     .should('eq', 200)
  //     .then((statusCode) => {
  //       cy.log('Response Status Code:', statusCode);
  //       console.log('Response Status Code:', statusCode);
  //     });
  // });


  it('get Full Data as response', () => {
    const headers = {
        'Authorization': 'Bearer 5962aecb5555b19fb60255a472318bbe86e240a219879ca95ace963a487cfa1d'
    };

    // Trigger the API call using cy.request()
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/comments',
        headers: headers, // Set request headers
        // Add any request payload if needed
    }).then((response) => {
        // Access the response data
        const responseData = response.body;
        // Handle the response data as needed
        console.log('Response Data:', responseData); // Log response data in the console
    });
  });

  it('get Full Data as response For this', () => {
    cy.intercept('GET', 'https://gorest.co.in/public/v2/users', (req) => {
      req.headers['authorization'] = 'Bearer 5962aecb5555b19fb60255a472318bbe86e240a219879ca95ace963a487cfa1d';
    }).as('gettodos');
  
    //cy.visit('https://gorest.co.in/public/v2/posts/122493'); // Make sure to visit a page that triggers the request
    cy.wait(6000);
    cy.wait('@gettodos').its('response.statusCode').should('eq', 200);
  });
  
});