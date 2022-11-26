import { render } from '@testing-library/react';
import Footer from '@/components/Layout/footer';
import { getSocials } from '../../../services/requests';
import { Socials } from 'services/types/baseTypes';
import dataMocks from '../../__mocks__/dataMocks';
import { useEffect, useState } from 'react';

jest.mock('../../../services/requests');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
  useState: jest.fn(),
}));

describe('Footer component tests', () => {
  it('./components/layout/footer', () => {
    const heroGithub = 'https://github.com/AndreyNovaes'
    const heroLinkedin = 'https://www.linkedin.com/in/andrey-de-novaes'
    const heroWhatsapp = 'https://api.whatsapp.com/send?phone=5521994312856'
    const socials: Socials[] = dataMocks.withId.socials;
    (getSocials as jest.Mock).mockResolvedValue(socials);
    (useEffect as jest.Mock).mockImplementation((f) => f());
    (useState as jest.Mock).mockReturnValue([socials, jest.fn()]);
    const { getByLabelText } = render(<Footer />);
    // verify that the component renders correctly  
    const githubLink = getByLabelText(/github/i);
    expect(githubLink).toBeInTheDocument();
    const linkedinLink = getByLabelText(/linkedin/i);
    expect(linkedinLink).toBeInTheDocument();
    const whatsappLink = getByLabelText(/whatsapp/i);
    expect(whatsappLink).toBeInTheDocument();
    // verify if the href is correct
    expect(githubLink).toHaveAttribute('href', heroGithub);
    expect(linkedinLink).toHaveAttribute('href', heroLinkedin);
    expect(whatsappLink).toHaveAttribute('href', heroWhatsapp);
  });
});
