import { probioticChewsPage } from "../pageObjects/Probiotic-chews";
import { stockUpPage } from "../pageObjects/StockPage";
import { allergyImmunePage } from "../pageObjects/ProbioticAllergyImmunePage";
import {visit,checkFooterLinks,verifyPageLoad }  from '../support//utils/BrowserUtils';
import Data from "../fixtures/Data.json";


describe('Probiotic Chews Offer Page', () => {

  beforeEach(() => {
   visit(Data.probioticChews.url);
  });

it(' Verify page loads (HTTP 200 Success)', () => {
  verifyPageLoad(Data.probioticChews.url);
  cy.wait(1500);
})

it(' Verify prices on the UI', () => {
  cy.wait(1500);
  probioticChewsPage.verifyAllPrices(Data.probioticChews);
})
it('Verify prices are displayed in respective correct currency', () => {
  cy.wait(1500);
 probioticChewsPage.verifyCurrency(Data.probioticChews.currency);
})
it(' Verify shipping are applied correctly', () => {
  cy.wait(1500);
  probioticChewsPage.verifyShippingText(Data.probioticChews.shippingText)
})
it(' Verify footer links all navigate to the correct pages', () => {
  cy.wait(1500);
  checkFooterLinks();
  probioticChewsPage.getFooterLinks()
})
  });


describe('Stock Up & Save Page', () => {
  beforeEach(() => {
   visit(Data.stockUpSave.url); // 
  });

  it(' Verify page loads (HTTP 200 Success)', () => {
    verifyPageLoad(Data.stockUpSave.url);
      cy.wait(1500);
    }) 
    it(' Verify all package on the UI', () => {
      cy.wait(1500);
      stockUpPage.verifyAllPackages(Data.stockUpSave);
    })
    it('Verify prices are displayed in respective correct currency', () => {
      cy.wait(1500);
     probioticChewsPage.verifyCurrency(Data.stockUpSave.currency);
    })
    it(' Verify shipping are applied correctly', () => {
      const selectedPackage = "Buy 5, Get 3 FREE";  
      const expectedShippingText = Data.allergyImmune.dogSize.packageName[selectedPackage].shippingText;
    stockUpPage.verifyShippingTextStock(expectedShippingText);
    })
    it(' Verify footer links all navigate to the correct pages', () => {
      cy.wait(1500);
     checkFooterLinks();
      probioticChewsPage.getFooterLinks()
    })

  

});

describe(' Allergy & Immune Probiotic Chew Page', () => {
  beforeEach(() => {
   visit(Data.allergyImmune.url);
  });

  it(' Verify page loads (HTTP 200 Success)', () => {
    verifyPageLoad(Data.allergyImmune.url);
     })
    
    it(' Verify all dog size on the UI', () => {
       allergyImmunePage.verifyAllDogSizes(Data.allergyImmune);
    })
    it('Verify prices are displayed in respective correct currency', () => {
       probioticChewsPage.verifyCurrency(Data.allergyImmune.currency);
    })
    
    it(' Verify footer links all navigate to the correct pages', () => {
      cy.wait(1500);
     checkFooterLinks();
      probioticChewsPage.getFooterLinks()
    })
      });
    



