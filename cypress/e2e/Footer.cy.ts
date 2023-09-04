import { cy } from 'local-cypress';

describe('header', () => {
  beforeEach(() => {
    cy.visit('/en');
  });
  it('shows warning message when trying to send an empty form', () => {
    cy.get('h3')
      .contains('Subscribe to our news letter to get latest updates and news')
      .should('exist');
    cy.get('button').contains('Subscribe').trigger('mouseover').wait(2000).click();
    cy.get('[data-cy="errorMessageInput"]').should('be.visible');
  });

  it('subscribes when entered valid email', () => {
    cy.get('h3')
      .contains('Subscribe to our news letter to get latest updates and news')
      .should('exist');
    cy.get('input:first')
      .should('have.attr', 'placeholder', 'e@example.com')
      .type('denis.bar@gmail.com');
    cy.get('button').contains('Subscribe').trigger('mouseover').wait(2000).click();
  });
});
