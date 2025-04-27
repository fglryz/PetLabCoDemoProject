

declare namespace Cypress {
  interface Chainable {
    validatePrices(subscriptionOptions: string[], prices: PriceData[]): Chainable<void>;
    validateFooterLinks(): Chainable<void>;
    closePopupIfPresent(): Chainable<void>;
    closePopupGroupIfPresent(): Chainable<void>;
    
  }
}
