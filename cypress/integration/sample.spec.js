describe('Selenium Easy - Simple Form', () => {
    it('Single input Field', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
        cy.get("div[id='at-cv-lightbox-button-holder']").find(">a").eq(1).click();
        cy.get("input[id='user-message']").type("Viktoria is testing Cypress");
        cy.get("button[onclick='showInput();']").click();
        cy.get("span[id='display']").should(($iden) => {
            expect($iden.text()).to.equal("Viktoria is testing Cypress");
          })        

    })
  })