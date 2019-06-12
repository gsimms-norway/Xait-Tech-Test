// Xait tech test using Cypress framework against google.com />


describe('google test case for Xait', function() {
  beforeEach(function() {
    cy.visit('https://www.google.com/');
  });
  it('contains "Google" in the title', function() {
    cy.title().should('contain', 'Google');
  });
  it('Search box should be visible ', function() {
  	cy.get('.gLFyf').should('be.visible'); ;
});
 
it('Search box input ', function() {
cy.get('.gLFyf').type('Hello, World');

});

it('Search for time in Houston ', function() {
cy.get('.gLFyf').type('Time Houston{enter}');

});

it('Use Define Function  ', function() {
cy.get('.gLFyf').type('define: tech savvy{enter}');

});

it('Use Math Function  ', function() {
cy.get('.gLFyf').type('5*5-12{enter}');

});


it('Search using filetype = pdf  ', function() {
cy.get('.gLFyf').type('american football filetype:pdf{enter}');

});

it('Search related sites  ', function() {
cy.get('.gLFyf').type('related:nytimes.com{enter}');

});

it('Use Translate ', function() {
cy.get('.gLFyf').type('translate good morning; thanks for the test into norwegian{enter}');

});

  }); 