Cypress.Commands.add(
  'getx',
  (
    selector: any,
    options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Shadow>
  ) => {
    return cy
      .get('[data-cy="iframe"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .find('#sandboxFrame')
      .should('exist')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .find('#userHtmlFrame')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .find(selector, options);
  }
);

Cypress.Commands.add('waitApi', (then?: () => void) => {
  cy.intercept('POST', 'https://script.google.com/macros/s/**').as('api');
  then?.();
  cy.wait('@api');
});
