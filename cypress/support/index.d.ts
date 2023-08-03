/// <reference  types="cypress" />
import "./commands";

type Method = "POST" | "GET" | "DELETE";

declare global {
  namespace Cypress {
    interface Chainable {
      interceptRequest(method: Method): Chainable<null>;
    }
  }
}
