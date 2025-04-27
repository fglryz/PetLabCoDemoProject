import './commands';

Cypress.Commands.add('closePopupIfPresent', () => {
    cy.get('body').then(($body) => {
      if ($body.find('#title-Close-dialog').length > 0) {
        cy.get('#title-Close-dialog').click();
      }
    });
  });
  Cypress.Commands.add('closePopupGroupIfPresent', () => {
    cy.get('body').then(($body) => {
      if ($body.find('#onetrust-accept-btn-handler').length > 0) {
        cy.get('#onetrust-accept-btn-handler').click();
      }
    });
  });
 
  
