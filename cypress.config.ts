import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    env: {
      socials: {
          github: 'https://github.com/AndreyNovaes',
          linkedin: 'https://www.linkedin.com/in/andrey-de-novaes/',
          whatsapp: 'https://api.whatsapp.com/send?phone=5521994312856',
        },
      email: 'andreynovaespro@gmail.com',
      phone: '(21)99431-2856',
      address: 'Rua dos Bobos, nº 0',
    },
  }
})