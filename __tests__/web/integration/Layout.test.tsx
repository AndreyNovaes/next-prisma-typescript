import { render } from '@testing-library/react';
import { getSocials, getRoutes } from '../../../services/requests';
import { useEffect, useState } from 'react';
import data from '../../__mocks__/dataMocks'
import Layout from '@/components/Layout';
import { Routes, Socials } from 'services/types/baseTypes';

jest.mock('../../../services/requests');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
  useState: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  }
}));


describe('Layout component tests', () => {
  test('this component render in every page', () => {
    const routes: Routes[] = data.withId.routes;
    const socials: Socials[] = data.withId.socials;

    (getSocials as jest.Mock).mockResolvedValue(socials);
    (getRoutes as jest.Mock).mockResolvedValue(routes);
    (useEffect as jest.Mock).mockImplementation((f) => f());
    (useState as jest.Mock).mockReturnValue([routes, jest.fn()]);

    const { getAllByRole, getByLabelText } = render(<Layout />);
    const buttonHome = getAllByRole('link', { name: /Home/i });
    const buttonAbout = getAllByRole('link', { name: /Sobre/i });
    const buttonProjects = getAllByRole('link', { name: /Projetos/i });
    const buttonContact = getAllByRole('link', { name: /Contato/i });
    const svgSwitch = getByLabelText(/toggle color mode/i);
    expect(buttonHome).toHaveLength(2);
    expect(buttonAbout).toHaveLength(2);
    expect(buttonProjects).toHaveLength(2);
    expect(buttonContact).toHaveLength(2);
    expect(svgSwitch).toBeInTheDocument();
  });
});
