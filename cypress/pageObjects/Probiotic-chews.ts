

class ProbioticChewsPage {

  selectSubscribeAndSave() {
    cy.get('[data-testid="subscribe-and-save"]').click({ force: true });
  }

  selectOneTime() {
    cy.get('[data-element-id="one-time"]', { timeout: 10000 })
      .scrollIntoView()
      .should('exist')
      .should('be.visible')
      .click({ force: true });


    cy.get('[data-element-id="otp-quantity-selector-1-tub"]', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true }); // Burada 1 Tub'ı seçiyoruz
  }

  selectTub(quantity: '1' | '2' | '3') {
    switch (quantity) {
      case '1':
        cy.get('[data-element-id="sub-quantity-selector-1-tub"]').click();
        break;
      case '2':
        cy.get('[data-element-id="sub-quantity-selector-2-tub"]').click();
        break;
      case '3':
        cy.get('[data-element-id="sub-quantity-selector-3-tub"]').click();
        break;
      default:
        throw new Error('Invalid quantity selected');
    }
    cy.wait(1000);
  }
  selectTubOneTime(quantity: '1' | '2' | '3') {
    switch (quantity) {
      case '1':
        cy.get('[data-element-id="otp-quantity-selector-1-tub"]').click();
        break;
      case '2':
        cy.get('[data-element-id="otp-quantity-selector-2-tub"]').click();
        break;
      case '3':
        cy.get('[data-element-id="otp-quantity-selector-3-tub"]').click();
        break;
      default:
        throw new Error('Invalid quantity selected');
    }

    cy.wait(1000);
  }

  getPrice() {
    return cy.get('[data-element-id="total-price-sub"] strong').then($el => {
      if ($el.length && $el.is(':visible')) {
        return cy.wrap($el);
      } else {
        cy.get('[data-element-id="total-price-sub"]').scrollIntoView({ offset: { top: -100, left: 0 } });
        return cy.get('[data-element-id="total-price-otp"] strong').scrollIntoView({ offset: { top: -100, left: 0 } });
      }
    });
  }
  getPriceOneTime() {
    return cy.get('[data-element-id="total-price-otp"] strong').then($el => {
      if ($el.length && $el.is(':visible')) {
        return cy.wrap($el);
      } else {
        cy.get('[data-element-id="total-price-otp"]').scrollIntoView({ offset: { top: -100, left: 0 } });
        return cy.get('[data-element-id="total-price-otp"] strong').scrollIntoView({ offset: { top: -100, left: 0 } });
      }
    });
  }

  getCurrency() {
    return cy.get('[data-element-id="total-price-otp"] strong');
  }
  getFooterLinks() {
    return cy.get('#funnel-footer a');
  }

  verifyPrice(expectedPrice: string) {
    if (expectedPrice === undefined) {
      throw new Error('Expected price is undefined. Check your offersData keys!');
    }

    this.getPrice()
      .should('exist')
      .should('not.have.text', '')
      .invoke('text')
      .then(actualPrice => {
        const cleanedActualPrice = actualPrice.trim();
        cy.log(`Expected price: ${expectedPrice} | Actual Price: ${cleanedActualPrice}`);
        expect(cleanedActualPrice).to.eq(expectedPrice);
      });
  }
  verifyPriceOneTime(expectedPrice: string) {
    if (expectedPrice === undefined) {
      throw new Error('Expected price is undefined. Check your offersData keys!');
    }

    this.getPriceOneTime()
      .should('exist')
      .should('not.have.text', '')
      .invoke('text')
      .then(actualPrice => {
        const cleanedActualPrice = actualPrice.trim();
        cy.log(`Beklenen Fiyat: ${expectedPrice} | Gerçek Fiyat: ${cleanedActualPrice}`);
        expect(cleanedActualPrice).to.eq(expectedPrice);
      });
  }

  async verifyAllPrices(data: any) {

    for (const qty of ['1', '2', '3']) {
      cy.then(() => {
        this.selectTub(qty as '1' | '2' | '3');
      }).then(() => {
        this.verifyPrice(data.subscribeAndSave[`${qty}Tub`]);
      });
    }

    cy.then(() => {
      this.selectOneTime();
    }).then(() => {
      for (const qty of ['1', '2', '3']) {
        cy.then(() => {
          this.selectTubOneTime(qty as '1' | '2' | '3');
        }).then(() => {
          this.verifyPriceOneTime(`${data.oneTime[`${qty}Tub`]}`);
        });
      }
    });
  }
  verifyCurrency(currencySymbol: string) {
    cy.get('body').then(($body) => {
      const text = $body.text();
      expect(text).to.include(currencySymbol);
    });
  }
  verifyShippingText(expectedShippingCost: string) {
    cy.get('span.text-primary.text-base strong').eq(0)
      .should('contain.text', expectedShippingCost);

  }
 
  verifyFooterLinksNavigation(expectedUrls: string[]) {
    this.getFooterLinks().each(($link, index) => {
      const href = $link.prop('href');
      cy.wrap($link).invoke('removeAttr', 'target').click();
      cy.url().should('include', expectedUrls[index]);
      cy.go('back');
    });
  }
}


export const probioticChewsPage = new ProbioticChewsPage();