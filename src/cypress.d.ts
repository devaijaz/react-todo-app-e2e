declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(testid: string): Chainable<ELement>;
    }
  }
}
