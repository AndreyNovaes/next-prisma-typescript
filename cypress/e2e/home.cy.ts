/// <reference types="cypress" />
describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
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
    cy.findByRole('heading', { name: /olá, eu sou o andrey/i }).should('exist')
    cy.findByText(/busco, por meio da tecnologia, estimular a excelência, da mesma forma que fui estimulado pelos meus mentores./i).should('exist')
    cy.findByRole('link', { name: /conheça meu trabalho/i }).should('have.attr', 'href', '/projetos')
    cy.findByRole('link', { name: /Entre em contato/i }).should('have.attr', 'href', '/contato')
  })
})

export {}
