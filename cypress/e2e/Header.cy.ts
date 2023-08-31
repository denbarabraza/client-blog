import { cy } from 'local-cypress';

describe('header', () => {
  beforeEach(() => {
    cy.visit('/en');
  });
  it('switching language changes works correctly (display, url)', () => {
    cy.get('[data-cy="switcherItem"] > :nth-child(3) > a').contains('ru');
    cy.get('[data-cy="switcherItem"] > :nth-child(3) > a').click().visit('ru');

    cy.get(
      '[data-cy="menuItem"] > [data-cy="navMenu"] > :nth-child(1) > [data-cy="link"]',
    ).contains('Главная');
    cy.get('[data-cy="switcherItem"] > :nth-child(3) > a').contains('en');
  });
  it('correct operation of navigation via header', () => {
    cy.get(
      '[data-cy="menuItem"] > [data-cy="navMenu"] > :nth-child(1) > [data-cy="link"]',
    )
      .click()
      .visit('en');
    cy.get(
      '[data-cy="menuItem"] > [data-cy="navMenu"] > :nth-child(2) > [data-cy="link"]',
    )
      .click()
      .visit('en/blog');
    cy.get(
      '[data-cy="menuItem"] > [data-cy="navMenu"] > :nth-child(3) > [data-cy="link"]',
    )
      .click()
      .visit('en/aboutUs');
    cy.get(
      '[data-cy="menuItem"] > [data-cy="navMenu"] > :nth-child(4) > [data-cy="link"]',
    )
      .click()
      .visit('en/contactUs');
  });
  it('when the screen resolution is equal to mobile, the burger menu should appear', () => {
    cy.viewport(667, 375);
    cy.get('[data-cy="burgerMenuButton"] > :nth-child(2)').should('be.visible').click();
  });
});
