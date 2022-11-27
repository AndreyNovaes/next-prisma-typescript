/// <reference types="cypress" />
describe('Teste de um recrutador navegando pelo site', () => {
  before(() => {
    cy.visit('/')
    cy.wait(1000)
  })
  beforeEach(() => {
    cy.viewport(1920, 1080);
    // Nav
    cy.findByRole('link', { name: /home/i }).should('have.attr', 'href', '/')
    cy.findByRole('link', { name: /sobre/i }).should('have.attr', 'href', '/sobre')
    cy.findByRole('link', { name: /projetos/i }).should('have.attr', 'href', '/projetos')
    cy.findByRole('link', { name: /contatos/i }).should('have.attr', 'href', '/contato')
    cy.findByLabelText(/Toggle Color Mode/i).should('exist')
    // Footer
    cy.findByLabelText(/Documentação e direitos autorais/i).should('exist')
    cy.findByLabelText(/Github/i).should('have.attr', 'href', 'https://github.com/AndreyNovaes')
    cy.findByLabelText(/Linkedin/i).should('have.attr', 'href', 'https://www.linkedin.com/in/andrey-de-novaes')
    cy.findByLabelText(/Whatsapp/i).should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=5521994312856')
  })
  it('Home', () => {
    cy.findByRole('heading', { name: /olá, eu sou o andrey/i }).should('exist')
    cy.findByText(/busco, por meio da tecnologia, estimular a excelência, da mesma forma que fui estimulado pelos meus mentores./i).should('exist')
    cy.findByRole('link', { name: /conheça meu trabalho/i }).should('have.attr', 'href', '/projetos')
    cy.findByRole('link', { name: /Entre em contato/i }).should('have.attr', 'href', '/contato')
    // should go to /projetos
    cy.findByRole('link', { name: /conheça meu trabalho/i }).click() 
  })
  it('Projetos', () => {
    cy.findByText(/portfólio/i).should('be.visible')
    cy.findByText(/Ebytr/i).should('be.visible')
    cy.findByText(/countdown/i).should('be.visible')
    cy.findByRole('button', { name: /next slide/i }).click()
    cy.findByText(/portfólio/i).should('not.be.visible')
    cy.findByText(/Repositories list/i).should('be.visible')
    cy.findByRole('link', { name: /sobre/i }).click()
  })
  it('Sobre', () => {
    cy.findByRole('heading', { name: /como conheci a programação/i }).should('exist')
    cy.findByRole('heading', { name: /quer saber mais sobre mim \?/i }).should('exist')
    cy.findByRole('link', { name: /entre em contato/i }).should('have.attr', 'href', '/contato')
    cy.findByRole('img', { name: /autor da página/i }).should('exist')
    cy.findByRole('link', { name: /contato/i }).click()
  })
  it('Contato', () => {
    cy.findByRole('heading', { name: /contato/i }).should('exist')
    cy.findByText(/email: andreynovaespro@gmail\.com telefone: \+55 21 99431\-2856/i).should('exist')
    cy.findByLabelText(/copiar email/i).should('exist')
    cy.findByLabelText(/copiar telefone/i).should('exist')
    cy.findByRole('heading', { name: /ou, se preferir, preencha o formulário abaixo e me envie uma mensagem\./i }).should('exist')
    // forms
    cy.findByPlaceholderText(/name/i).should('exist')
    cy.findByPlaceholderText(/email/i).should('exist')
    cy.findByPlaceholderText(/message/i).should('exist')
    cy.findByRole('button', { name: /enviar mensagem/i }).should('exist')
    const name = 'Andrey Novaes'
    const invalidEmail = 'andreynovaespro'
    const email = 'testederealismo@gmail.com'
    const message = 'Olá, tudo bem?, by cypress'
    cy.findByPlaceholderText(/name/i).type(name)
    cy.findByPlaceholderText(/email/i).type(invalidEmail)
    cy.findByPlaceholderText(/message/i).type(message)
    cy.findByRole('button', { name: /enviar mensagem/i }).click()
    cy.findByText(/preencha todos os campos!/i).should('exist')
    cy.findByPlaceholderText(/email/i).clear().type(email)
    cy.findByRole('button', { name: /enviar mensagem/i }).click()
    cy.findByText(/mensagem enviada com sucesso!/i).should('exist')
  })
})

export {}
