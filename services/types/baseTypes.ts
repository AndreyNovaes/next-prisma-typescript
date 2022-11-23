import { routes, socials, projects } from '@prisma/client';

export type Routes = routes;
export type Socials = socials;
export type Projects = projects;

export type ArrayOfRoutes = {
  routes: routes[];
};

export type ArrayOfSocials = {
  socials: socials[];
};

export type ArrayOfProjects = {
  projects: projects[];
};
