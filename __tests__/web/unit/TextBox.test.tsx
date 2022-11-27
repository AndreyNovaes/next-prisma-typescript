import React from 'react';
import { render } from '@testing-library/react';
import TextBox from '@/components/Main-Content/About/components/textBox';

describe('TextBox', () => {
  it('should render correctly', () => {
    const { getByText, getByRole } = render(<TextBox />);
    expect(getByRole('heading', { name: /como conheci a programação/i })).toBeInTheDocument();
    expect(getByText(/Hoje, já formado pela Trybe, busco novas oportunidades para continuar aprendendo, pretendo, quando tiver uma maior senioridade, ajudar pessoas que estão começando agora como eu, tentando sempre tornar algo que é difícil e complicado, simples e fácil./i)).toBeInTheDocument();
    expect(getByText(/Entrei em uma faculdade de sistemas de informação, onde tive meu primeiro contato com a programação web, porém, não sentia que a faculdade estava gerando valor em relação a minha carreira, era um curso lento, desatualizado e estático, queria algo mais dinâmico, rápido, algo que realmente pudesse gerar valor na minha carreira, então comecei a pesquisar sobre outros cursos e ferramentas para estudar por conta própria, acabei encontrando o curso de desenvolvimento web da Trybe, onde aprendi a programar em javascript, react, node, entre outras tecnologias./i)).toBeInTheDocument();
  });
});
