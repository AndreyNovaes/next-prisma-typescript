import React from 'react';
import { render } from '@testing-library/react';
// find da erro se n tiver o elemento e espera o elemento a aparecer
// query nao da erro se n tiver o elemento
// get da erro se n tiver o elemento e nao espera o elemento a aparecer
test('teste unitário', () => {
  const { getByText } = render(<h1>hello world</h1>);
  expect(getByText('hello world')).toBeInTheDocument();
});
