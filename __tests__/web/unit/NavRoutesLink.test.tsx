import React from 'react';
import { render } from '@testing-library/react';
import NavRoutesLink from '@/components/Layout/Nav/Web/NavRoutesLink';
import data from '../../__mocks__/dataMocks'
import { Routes } from 'services/types/baseTypes';

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

describe('NavRoutesLink component tests', () => {
  test('this component render in every page inside Layout', () => {
    const routesMock: Routes[] = data.withId.routes;
    routesMock.forEach(({ id, name, path }) => {
      const { getByText } = render(<NavRoutesLink id={id} name={name} path={path} />);
      expect(getByText(name)).toBeInTheDocument();
      expect(getByText(name)).toHaveAttribute('href', path);
    });
  })
})
