import { cy } from 'local-cypress';

describe('category', () => {
  beforeEach(() => {
    cy.visit('/en/contactUs');
  });
  it('shows warning message when trying to send an empty form', () => {
    cy.get('[data-cy="contactUsButton"]').click();
    cy.get('[data-cy="contactUsForm"] > :nth-child(2)')
      .should('be.visible')
      .contains('Full Name is required');
    cy.get('[data-cy="contactUsForm"] > :nth-child(4)')
      .should('be.visible')
      .contains('No email provided');
    cy.get('[data-cy="contactUsForm"] > :nth-child(8)')
      .should('be.visible')
      .contains('Message is required');
  });

  it('send message when entered valid values form', () => {
    cy.get('[data-cy="contactUsFullName"]').type('Den Ba');
    cy.get('[data-cy="contactUsEmail"]').type('denis.bar@gmail.com');
    cy.get('[data-cy="contactUsFullMessage"]').type('Cypress test');
    cy.get('[data-cy="contactUsButton"]').click();
  });
});
