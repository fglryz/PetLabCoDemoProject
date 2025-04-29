class StockUpPage {

  selectPackage(option: 'buy5Get3Free' | 'buy4Get2Free' | 'buy3Get1Free') {
    switch (option) {
      case 'buy5Get3Free':
        cy.get('[data-element-id="otp-quantity-selector-1"]').click({ force: true });
        break;
      case 'buy4Get2Free':
        cy.get('[data-element-id="otp-quantity-selector-2"]').click({ force: true });
        break;
      case 'buy3Get1Free':
        cy.get('[data-element-id="otp-quantity-selector-3"]').click({ force: true });
        break;
      default:
        throw new Error('Invalid package option selected');
    }
  }
  getDiscountedPrice() {
    return cy.get('[data-element-id="total-price-otp"] strong');
  }

  verifyShippingTextStock(expectedShippingText: string) {
    cy.get('[data-element-id="otp-quantity-selector-1"]')
      .should('contain.text', expectedShippingText);
  }


  verifyPrice(expectedPrice: string, expectedCurrency: string, expectedShipping: string) {
    this.getDiscountedPrice().should('contain.text', expectedPrice);
  }
  verifyAllPackages(data: any) {
    ['buy5Get3Free', 'buy4Get2Free', 'buy3Get1Free'].forEach(packages => {
      this.selectPackage(packages as 'buy5Get3Free' | 'buy4Get2Free' | 'buy3Get1Free');
      this.verifyPrice(
        data.packages[packages].discountedPrice,
        data.currency,
        data.packages[packages].shippingCost
      );
    });

  }
}

export const stockUpPage = new StockUpPage();
