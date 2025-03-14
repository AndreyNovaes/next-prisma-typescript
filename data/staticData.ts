import { Social, Route, Project } from '../services/types/baseTypes';

export const routes: Route[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Sobre',
    path: '/sobre',
  },
  {
    id: 3,
    name: 'Projetos',
    path: '/projetos',
  },
  {
    id: 4,
    name: 'Contatos',
    path: '/contato',
  },
  {
    id: 4,
    name: 'Linha do Tempo',
    path: '/timeline',  }
];

export const socials: Social[] = [
  {
    id: 1,
    name: 'Github',
    link: 'https://github.com/AndreyNovaes',
  },
  {
    id: 2,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/andrey-de-novaes',
  },
  {
    id: 3,
    name: 'Whatsapp',
    link: 'https://api.whatsapp.com/send?phone=5521994312856',
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfólio',
    description: 'Aplicação Web responsiva para exibição de projetos e informações pessoais',
    tags: ['Next.js', 'Typescript', 'Node', 'Prisma', 'PostgreSQL', 'Chakra UI', 'Docker', 'ESlint', 'Jest', 'React Testing Library'],
    image: '/images/portfolio.gif',
    github: 'https://github.com/AndreyNovaes/next-prisma-typescript',
    deploy: 'https://andrey-novaes.me/',
  },
  {
    id: 2,
    title: 'Ebytr',
    description: 'Aplicação Web de gerenciamento de tarefas',
    tags: ['React', 'Javascript', 'Node', 'Sequelize', 'Express', 'MySQL', 'Chakra UI', 'Docker', 'ESlint', 'Mocha', 'Chai', 'Sinon'],
    image: '/images/Ebytr.gif',
    github: 'https://github.com/AndreyNovaes/Ebytr-teste-tecnico',
    deploy: '',
  },
  {
    id: 3,
    title: 'Countdown',
    description: 'Aplicação Web de contagem regressiva.',
    tags: ['React', 'Javascript', 'CSS', 'HTML'],
    image: '/images/countdown.gif',
    github: 'https://github.com/AndreyNovaes/countdown',
    deploy: 'https://andreynovaes.github.io/countdown/',
  },
  {
    id: 4,
    title: 'Repositories List',
    description: 'Aplicação Web para exibição de repositórios npm',
    tags: ['React', 'Typescript', 'Redux', 'HTML', 'Chakra UI'],
    image: '/images/redux.gif',
    github: 'https://github.com/AndreyNovaes/redux-react-ts-repositoriesList',
    deploy: 'https://redux-react-ts-repositories-list.vercel.app/',
  },
  {
    id: 5,
    title: 'Desafios de Algoritmos e Estruturas de Dados',
    description: 'Repositório com desafios de algoritmos e estruturas de dados em Javascript.',
    tags: ['Javascript', 'Algoritmos', 'Estruturas de Dados', 'Jest'],
    image: '/images/bigO.png',
    github: 'https://github.com/AndreyNovaes/Desafios',
    deploy: '',
  }
];