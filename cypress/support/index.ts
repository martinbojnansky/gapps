import './commands';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getx<S = any>(
        selector: any,
        options?: Partial<
          Cypress.Loggable & Cypress.Timeoutable & Cypress.Shadow
        >
      ): Chainable<S>;
      waitApi(then?: () => void): Chainable<void>;
    }
  }
}
