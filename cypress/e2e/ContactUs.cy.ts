import { cy } from 'local-cypress';

describe('category', () => {
  beforeEach(() => {
    cy.visit('/en/contactUs');
  });

  it('send message when entered valid values form', () => {
    cy.get('[data-cy="contactUsFullName"]').type('Den Ba');
    cy.get('[data-cy="contactUsEmail"]').type('denis.bar@gmail.com');
    cy.get('[data-cy="contactUsFullMessage"]').type('Cypress test');
    cy.get('[data-cy="contactUsButton"]').click();
  });
});
