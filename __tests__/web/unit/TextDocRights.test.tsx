import React from 'react';
import { render } from '@testing-library/react';
import TextDocRights from '@/components/Layout/footer/Web/TextDocRights';

describe('TextDocRights component tests', () => {
  test('this component render in every page inside Layout', () => {
    const { getByLabelText } = render(<TextDocRights />);
    expect(getByLabelText(/documentação e direitos autorais/i)).toBeInTheDocument();
  });
})
