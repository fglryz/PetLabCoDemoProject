class AllergyImmunePage {

  selectDogSize(size: 'under25lbs' | '25to75lbs' | 'over75lbs') {
    switch (size) {
      case 'under25lbs':
        cy.get('[data-element-id="sub-product-selector-small"]').contains('Under 25 lbs').click();
        break;
      case '25to75lbs':
        cy.get('[data-element-id="sub-product-selector-medium"]').contains('25 - 75 lbs').click();
        break;
      case 'over75lbs':
        cy.get('[data-element-id="sub-product-selector-large"]').contains('Over 75 lbs').click();
        break;
      default:
        throw new Error('Invalid dog size selected');
    }
  }

  selectTub(quantity: '1' | '2' | '3') {
    switch (quantity) {
      case '1':
        cy.get('[data-element-id="sub-quantity-selector-1"]').click();
        break;
      case '2':
        cy.get('[data-element-id="sub-quantity-selector-2"]').click();
        break;
      case '3':
        cy.get('[data-element-id="sub-quantity-selector-3"]').click();
        break;
      default:
        throw new Error('Invalid quantity selected');
    }

    cy.wait(1000);
  }

  getPricePerDayByIndex(index: number) {
    return cy.get('.text-primary-80.text-sm.mobile\\:text-base').eq(index);
  }
  getPrice() {
    return cy.get('.text-primary-80.text-sm.mobile\\:text-base').then($el => {
      if ($el.length && $el.is(':visible')) {
        return cy.wrap($el);
      } else {
        cy.get('.text-primary-80.text-sm.mobile\\:text-base').scrollIntoView({ offset: { top: -100, left: 0 } });
        return cy.get('.text-primary-80.text-sm.mobile\\:text-base').scrollIntoView({ offset: { top: -100, left: 0 } });
      }
    });
  }
  verifyAllDogSizes(data: any) {
    ['under25lbs', '25to75lbs', 'over75lbs'].forEach(size => {
      this.selectDogSize(size as 'under25lbs' | '25to75lbs' | 'over75lbs');

      ['1', '2', '3'].forEach(qty => {
        this.selectTub(qty as '1' | '2' | '3');

      });
    });
   }

}

export const allergyImmunePage = new AllergyImmunePage();




