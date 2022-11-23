import { render } from '@testing-library/react';
import Nav from '@/components/Layout/Nav';
import routes from '../../__mocks__/dataMocks'

// this mocks next router, so activeLink(uses next/router) responds well
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}));

describe('Nav component tests', () => {    
  test('this component render in every page as layout inside _app ./pages/_app', () => {
    // NavBar buttons
    const { getByRole } = render(<Nav routes={routes.withId.routes} />);
    const buttonHome = getByRole('link', { name: /Home/i });
    const buttonAbout = getByRole('link', { name: /Sobre/i });
    const buttonProjects = getByRole('link', { name: /Projetos/i });
    const buttonContact = getByRole('link', { name: /Contato/i });
    // Test if the links are rendering correctly
    expect(buttonHome).toBeInTheDocument();
    expect(buttonAbout).toBeInTheDocument();
    expect(buttonProjects).toBeInTheDocument();
    expect(buttonContact).toBeInTheDocument();
    // Test if the href is correct
    expect(buttonHome).toHaveAttribute('href', '/');
    expect(buttonAbout).toHaveAttribute('href', '/sobre');
    expect(buttonProjects).toHaveAttribute('href', '/projetos');
    expect(buttonContact).toHaveAttribute('href', '/contato');
  });
});
