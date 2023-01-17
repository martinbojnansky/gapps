describe('core', () => {
  it('display greeting', () => {
    cy.visit('../../app/app--test.html');
    cy.waitApi();
    cy.getx('h1').should('contain.text', '"Hello, Martin!"');
  });
});
