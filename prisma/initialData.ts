import type { projects, routes, socials } from '@prisma/client';

type projectsSeed = Omit<projects, 'id'>;
type socialsSeed = Omit<socials, 'id'>;
type routesSeed = Omit<routes, 'id'>;

export const seed = () => {
  const projects: projectsSeed[] = [
    {
      title: 'Portfólio',
      description: 'Aplicação Web responsiva para exibição de projetos e informações pessoais',
      tags: ['Next.js', 'Typescript', 'Node', 'Prisma', 'PostgreSQL', 'Chakra UI', 'Docker', 'ESlint', 'Jest', 'React Testing Library'],
      image: '/images/portfolio.gif',
      github: 'https://github.com/AndreyNovaes/next-prisma-typescript',
      deploy: 'https://andrey-novaes.me/',
    },
    {
      title: 'Ebytr',
      description: 'Aplicação Web de gerenciamento de tarefas',
      tags: ['React', 'Javascript', 'Node', 'Sequelize', 'Express', 'MySQL', 'Chakra UI', 'Docker', 'ESlint', 'Mocha', 'Chai', 'Sinon'],
      image: '/images/Ebytr.gif',
      github: 'https://github.com/AndreyNovaes/Ebytr-teste-tecnico',
      deploy: '',
    },
    {
      title: 'Countdown',
      description: 'Aplicação Web de contagem regressiva.',
      tags: ['React', 'Javascript', 'CSS', 'HTML'],
      image: '/images/countdown.gif',
      github: 'https://github.com/AndreyNovaes/countdown',
      deploy: 'https://andreynovaes.github.io/countdown/',
    },
    {
      title: 'Repositories List',
      description: 'Aplicação Web para exibição de repositórios npm',
      tags: ['React', 'Typescript', 'Redux', 'HTML', 'Chakra UI'],
      image: '/images/redux.gif',
      github: 'https://github.com/AndreyNovaes/redux-react-ts-repositoriesList',
      deploy: 'https://redux-react-ts-repositories-list.vercel.app/',
    },
    {
      title: 'Desafios de Algoritmos e Estruturas de Dados',
      description: 'Repositório com desafios de algoritmos e estruturas de dados em Javascript.',
      tags: ['Javascript', 'Algoritmos', 'Estruturas de Dados', 'Jest'],
      image: '/images/bigO.png',
      github: 'https://github.com/AndreyNovaes/Desafios',
      deploy: '',
    },
  ];
  const routes: routesSeed[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Sobre',
      path: '/sobre',
    },
    {
      name: 'Projetos',
      path: '/projetos',
    },
    {
      name: 'Contatos',
      path: '/contato',
    },
  ];
  const socials: socialsSeed[] = [
    {
      name: 'Github',
      link: 'https://github.com/AndreyNovaes',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/andrey-de-novaes',
    },
    {
      name: 'Whatsapp',
      link: 'https://api.whatsapp.com/send?phone=5521994312856',
    },
  ];
  return { projects, routes, socials };
};
