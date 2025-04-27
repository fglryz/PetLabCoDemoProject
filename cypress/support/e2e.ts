import './commands'; //Cypress.on('uncaught:exception', (err) => {
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop')) {
          return false; // Bu hatayı yoksay
        }
      });
      
  