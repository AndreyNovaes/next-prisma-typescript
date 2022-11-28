import React from 'react';
import { render } from '@testing-library/react';
import FooterSocialLinks from '@/components/Layout/footer/Web/FooterSocialLinks';
import data from '../../__mocks__/dataMocks';

describe('FooterSocialLinks component tests', () => {
  test('this component render in every page inside Layout', () => {
    const { getByLabelText } = render(<FooterSocialLinks socials={data.withId.socials} />);
    const github = getByLabelText(/github/i);
    const linkedin = getByLabelText(/linkedin/i);
    const whatsapp = getByLabelText(/whatsapp/i);

    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(whatsapp).toBeInTheDocument();

    expect(github).toHaveAttribute('href', 'https://github.com/AndreyNovaes');
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/andrey-de-novaes');
    expect(whatsapp).toHaveAttribute('href', 'https://api.whatsapp.com/send?phone=5521994312856');
  });
});
