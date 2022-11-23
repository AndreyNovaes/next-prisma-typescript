import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/index';
// find da erro se n tiver o elemento e espera o elemento a aparecer
// query nao da erro se n tiver o elemento
// get da erro se n tiver o elemento e nao espera o elemento a aparecer

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Andrey/i);
  expect(linkElement).toBeInTheDocument();
});
// test('/pages/index.tsx Integration tests - Home component', () => {
//   const { getByText, getByRole, getByLabelText } = render(<Home />);
//   const heroName = getByText(/Andrey/i);
//   const heroDescription = getByText(/excelência/i);
//   const linkHome = getByRole('a', { name: /Home/i });
//   const linkProjects = getByRole('a', { name: /projetos/i });
//   const linkAbout = getByRole('a', { name: /sobre mim/i });
//   const linkContact = getByRole('a', { name: /contato/i });
//   const svgColorSwitch = getByRole('button', { name: /Toggle Color Mode/i });
//   const svgGithub = getByLabelText(/Github/i);
//   const svgLinkedin = getByLabelText(/Linkedin/i);
//   const svgWhatsapp = getByLabelText(/Whatsapp/i);
//   const buttonProjects = getByRole('button', { name: /conheça meu trabalho/i });
//   const buttonContact = getByRole('button', { name: /entre em contato/i });

//   expect(heroName).toBeInTheDocument();
//   expect(heroDescription).toBeInTheDocument();
//   expect(linkHome).toBeInTheDocument();
//   expect(linkProjects).toBeInTheDocument();
//   expect(linkAbout).toBeInTheDocument();
//   expect(linkContact).toBeInTheDocument();
//   expect(svgColorSwitch).toBeInTheDocument();
//   expect(svgGithub).toBeInTheDocument();
//   expect(svgLinkedin).toBeInTheDocument();
//   expect(svgWhatsapp).toBeInTheDocument();
//   expect(buttonProjects).toBeInTheDocument();
//   expect(buttonContact).toBeInTheDocument();
// });

