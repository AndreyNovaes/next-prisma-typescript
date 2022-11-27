/// <reference types="cypress" />
describe('Sobre', () => {
  beforeEach(() => {
    cy.visit('/sobre')
    cy.wait(1000)
  })
  it('Nav', () => {
    cy.findByRole('link', { name: /home/i }).should('have.attr', 'href', '/')
    cy.findByRole('link', { name: /sobre/i }).should('have.attr', 'href', '/sobre')
    cy.findByRole('link', { name: /projetos/i }).should('have.attr', 'href', '/projetos')
    cy.findByRole('link', { name: /contatos/i }).should('have.attr', 'href', '/contato')
    cy.findByLabelText(/Toggle Color Mode/i).should('exist')
  })
  it('Footer', () => {
    cy.findByLabelText(/Documentação e direitos autorais/i).should('exist')
    cy.findByLabelText(/Github/i).should('have.attr', 'href', 'https://github.com/AndreyNovaes')
    cy.findByLabelText(/Linkedin/i).should('have.attr', 'href', 'https://www.linkedin.com/in/andrey-de-novaes')
    cy.findByLabelText(/Whatsapp/i).should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=5521994312856')
  })
  it('Main', () => {
    cy.findByRole('heading', { name: /como conheci a programação/i }).should('exist')
    cy.findByRole('heading', { name: /quer saber mais sobre mim \?/i }).should('exist')
    cy.findByRole('link', { name: /entre em contato/i }).should('have.attr', 'href', '/contato')
    cy.findByRole('img', { name: /autor da página/i }).should('exist')
  })
})

export {}
