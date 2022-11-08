import type { projects, socials, routes } from "@prisma/client";

type projectsSeed = Omit<projects, "id">;
type socialsSeed = Omit<socials, "id">;
type routesSeed = Omit<routes, "id">;

export const seed = () => {
  const projects: projectsSeed[] = [
    {
      title: "Ebytr",
      description: "Aplicação Web de gerenciamento de tarefas com front-end em ReactJS, back-end em Node Express, banco de dados MySQL com o ORM Sequelize e estilizado com chakra UI.",
      tags: ["React", "Javascript", "Node", "Express", "Restful", "MySQL", "Sequelize", 'Docker', 'Chakra UI', 'Testes unitários', 'Testes de integração'],
      image: "https://i.imgur.com/hoLU30P.jpeg",
      github: "https://github.com/AndreyNovaes/Ebytr-teste-tecnico",
      deploy: "",
    },
    {
      title: "Desafios de Algoritmos e Estruturas de Dados",
      description: "Repositório com desafios de algoritmos e estruturas de dados em Javascript.",
      tags: ["Javascript", "Testes unitários", "Algoritmos", "Estruturas de Dados"],
      image: "https://i.imgur.com/hoLU30P.jpeg",
      github: "https://github.com/AndreyNovaes/Desafios",
      deploy: "",
    },
    {
      title: "Countdown",
      description: "Aplicação Web de contagem regressiva com front-end em ReactJS, estilizado com CSS",
      tags: ["React", "Javascript", "CSS", "HTML"],
      image: "https://i.imgur.com/hoLU30P.jpeg",
      github: "https://github.com/AndreyNovaes/countdown",
      deploy: "https://andreynovaes.github.io/countdown/",
    },
  ];
  const routes: routesSeed[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/sobre",
    },
    {
      name: "Projects",
      path: "/projetos",
    },
    {
      name: "Contact",
      path: "/contato",
    },
  ];
  const socials: socialsSeed[] = [
    {
      name: "Github",
      link: "https://github.com/AndreyNovaes",
      icon: "AiFillGithub",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/andrey-novaes-0b0b1b1b3/",
      icon: "AiFillLinkedin",
    },
    {
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=5519999999999",
      icon: "FaWhatsapp"
    },
    {
      name: "Email",
      link: "mailto:andreynovaespro@gmail.com",
      icon: "AiOutlineMail"
    },
  ];
  return { projects, routes, socials };
};
