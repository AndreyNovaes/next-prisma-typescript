import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import MenuMobile from '@/components/Layout/Nav/Mobile/Menu';
import data from '../../__mocks__/dataMocks'

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

describe('MenuMobile', () => {
  test('should render', () => {
    const { getByRole, getByText } = render(<MenuMobile routes={data.withId.routes} />);
    const hamburger = getByRole('button');
    const homeButton = getByText(/home/i);
    const aboutButton = getByText(/sobre/i);
    const projectsButton = getByText(/projetos/i);
    const contactButton = getByText(/contato/i);
    // see if the buttons are rendered
    expect(hamburger).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
    expect(projectsButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
    // see if the buttons are not visible in 1024 width
    expect(homeButton).not.toBeVisible();
    expect(aboutButton).not.toBeVisible();
    expect(projectsButton).not.toBeVisible();
    expect(contactButton).not.toBeVisible();
    // see if the buttons are visible after clicking the hamburger
    waitFor(() => {
      fireEvent.click(hamburger);
      expect(homeButton).toBeVisible();
      expect(aboutButton).toBeVisible();
      expect(projectsButton).toBeVisible();
      expect(contactButton).toBeVisible();
    });
  });
});
