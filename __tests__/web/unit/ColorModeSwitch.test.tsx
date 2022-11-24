import React from 'react';
import { render } from '@testing-library/react';
import ColorModeSwitcher from '@/components/Layout/Nav/Web/ColorModeSwitcher';

describe('ColorModeSwitcher component tests', () => {
  test('this component render in every page inside Layout', () => {
    const { getByRole } = render(<ColorModeSwitcher />);
    const buttonColorMode = getByRole('button', { name: /toggle color mode/i });
    expect(buttonColorMode).toBeInTheDocument();
  });
});
