import type { NextApiRequest, NextApiResponse } from "next";
import type { projects, socials, routes } from "@prisma/client";

const seed = () => {
  const projects: projects[] = [
    {
      id: 1,
      title: "Ebytr",
      description: "Aplicação Web de gerenciamento de tarefas com front-end em ReactJS, back-end em Node Express, banco de dados MySQL com o ORM Sequelize e estilizado com chakra UI.",
      tags: ["React", "Javascript", "Node", "Express", "Restful", "MySQL", "Sequelize", 'Docker', 'Chakra UI', 'Testes unitários', 'Testes de integração'],
      image: "https://i.imgur.com/hoLU30P.jpeg",
      github: "https://github.com/AndreyNovaes/Ebytr-teste-tecnico",
      deploy: "",
    },
    {
      id: 2,
      title: "Desafios de Algoritmos e Estruturas de Dados",
      description: "Repositório com desafios de algoritmos e estruturas de dados em Javascript.",
      tags: ["Javascript", "Testes unitários", "Algoritmos", "Estruturas de Dados"],
      image: "https://i.imgur.com/hoLU30P.jpeg",
      github: "https://github.com/AndreyNovaes/Desafios",
      deploy: "",
    },
    {
      id: 3,
      title: "Countdown",
      description: "Aplicação Web de contagem regressiva com front-end em ReactJS, estilizado com CSS",
      tags: ["React", "Javascript", "CSS", "HTML"],
      image: "https://i.imgur.com/hoLU30P.jpeg",
      github: "https://github.com/AndreyNovaes/countdown",
      deploy: "https://andreynovaes.github.io/countdown/",
    },
  ];
  // socials: socials[] = [
  //   {
  //     id: 1,
  //     name: "Github",
  //     link: "https://github.com/AndreyNovaes",
  //     icon: "https://i.imgur.com/hoLU30P.jpeg",

};
