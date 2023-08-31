import { cy } from 'local-cypress';

describe('category', () => {
  beforeEach(() => {
    cy.visit('/en/category/business');
  });
  it('correct operation and stylization of the category and tag values', () => {
    cy.get('[href="/en/category/business"] > [data-cy="categoryItem"]')
      .invoke('attr', 'class')
      .should('match', /.selected/);

    cy.get('[data-cy="tagBlock"] > :nth-child(1)')
      .click()
      .invoke('attr', 'class')
      .should('match', /.selected/);
  });

  it('correct operation of elastic search', () => {
    cy.get('input[placeholder*="Search for tag..."]').focus().type('b');
    cy.get('li').contains('business').trigger('mouseover').click();
    cy.get('[data-cy="tagsSearchButton"]').click();
    cy.get('[href="/en/category/business"] > [data-cy="categoryItem"]')
      .invoke('attr', 'class')
      .should('match', /.selected/);
  });

  it('when selecting a category, the url must be displayed correctly', () => {
    cy.get('[href="/en/category/startup"] > [data-cy="categoryItem"]').click();
    cy.url().should('include', '/en/category/startup');
  });
});
