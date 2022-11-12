/// <referemce types="cypress" />
describe('Home page links', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1500);
  })

  it('About section', () => {
    cy.contains(/sobre/i).should('be.visible').click();
    cy.wait(1500);
    cy.url().should('include', '/sobre');
  });

  it('Projects section', () => {
    cy.contains(/projetos/i).should('be.visible').click();
    cy.wait(1500);
    cy.url().should('include', '/projetos');
  });

  it('Contact section', () => {
    cy.contains(/contato/i).should('be.visible').click();
    cy.wait(1500);
    cy.url().should('include', '/contato');
  });

  it('Github SVG link', () => {
    cy.get('[aria-label="Github"]').should('be.visible')
      .then((link) => {
        cy.request(link.prop('href'))
          .its('status')
          .should('eq', 200)
    });
  });

  it('Linkedin SVG link', () => {
    cy.get('[aria-label="Linkedin"]').should('be.visible')
      .should('have.attr', 'href')
      .and('include', 'https://www.linkedin.com/in/andrey-de-novaes')
  });

  it('Whatsapp SVG link', () => {
    cy.get('[aria-label="Whatsapp"]').should('be.visible')
      .then((link) => {
        cy.request(link.prop('href'))
          .its('status')
          .should('eq', 200)
    });
  });
});

export {};
