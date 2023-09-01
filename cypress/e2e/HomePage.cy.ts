import { cy } from 'local-cypress';

describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/en');
  });
  it('page translation should work correctly', () => {
    cy.get('[data-cy="switcherItem"] > :nth-child(3) > a')
      .contains('ru')
      .click()
      .visit('ru');

    cy.get('[data-cy="viewAllPost"]').contains('Посмотреть Все');
  });
  it('navigation from the page should work correctly', () => {
    cy.get('[data-cy="viewAllPost"]').click();

    cy.visit('/en/blog');

    cy.visit('/en');
    cy.get(':nth-child(1) > [data-cy="blogPostId"]').click();
    cy.visit('/en/blogPost/0');

    cy.visit('/en');
    cy.get(':nth-child(1) > [data-cy="postInfo"] > [data-cy="authorId"]').click();
    cy.visit('en/author/0');

    cy.visit('/en');
    cy.get('[data-cy="aboutUsLinkHome"]').click();
    cy.visit('en/aboutUs');

    cy.visit('/en');
  });
});
