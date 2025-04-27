export function checkFooterLinks(): void {
    cy.get('#funnel-footer a').each(($link) => {
      const href = $link.prop('href');
      if (href) {
        cy.request({
          url: href
        }).its('status').should('eq', 200); 
      }
    });
  }
  export function visit(url: string): void {
    cy.visit(url);
  }

  export function verifyPageLoad(expectedUrlPart: string) {
    if (!expectedUrlPart) {
      throw new Error('expectedUrlPart is null or undefined!');
    }

    cy.location('href', { timeout: 15000 })
      .should('include', expectedUrlPart); // SPLIT YOK! Direkt include ediyoruz

    cy.request({
      url: expectedUrlPart,
      failOnStatusCode: false,
    }).its('status')
      .should('eq', 200);
  }
  
  
