import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../pages/index';

describe('Hero component tests', () => {
  test('/pages/index.tsx Hero component tests - Main-content in homepage', () => {
    const heroHeadingText = /olá, eu sou o andrey/i;
    const descriptionText = /busco, por meio da tecnologia, estimular a excelência, da mesma forma que fui estimulado pelos meus mentores\./i;
    const { getByText, getByRole } = render(<Home />);
    // Text content
    const heroHeading = getByText(heroHeadingText);
    expect(heroHeading).toBeInTheDocument();
    const heroDescription = getByText(descriptionText);
    expect(heroDescription).toBeInTheDocument();
    // Home buttons
    const buttonProjects = getByRole('link', { name: /conheça meu trabalho/i });
    expect(buttonProjects).toBeInTheDocument();
    const buttonContact = getByRole('link', { name: /entre em contato/i });
    expect(buttonContact).toBeInTheDocument();
    // Test if the href is correct
    expect(buttonProjects).toHaveAttribute('href', '/projetos');
    expect(buttonContact).toHaveAttribute('href', '/contato');
  });
});
