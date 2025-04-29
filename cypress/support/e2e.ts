import './commands';  // Returning false here prevents Cypress from failing the test.
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop') || err.message.includes('Cannot read properties of undefined')) {
          return false;
        }
      });
      
  