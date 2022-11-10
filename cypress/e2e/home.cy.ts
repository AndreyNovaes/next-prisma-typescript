
describe('home page internal routes', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1500);
  })
  it('About section', () => {
    cy.contains(/sobre/i).click();
    cy.wait(1500);
    cy.url().should('include', '/sobre');
  });
  it('Projects section', () => {
    cy.contains(/projetos/i).click();
    cy.wait(1500);
    cy.url().should('include', '/projetos');
  });
  it('Contact section', () => {
    cy.contains(/contato/i).click();
    cy.wait(1500);
    cy.url().should('include', '/contato');
  });
});
