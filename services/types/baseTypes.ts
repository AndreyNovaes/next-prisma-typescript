export interface Social {
  id: number;
  name: string;
  link: string;
}

export interface Route {
  id: number;
  name: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  deploy: string;
}

export type Socials = Social;
export type Routes = Route;
export type Projects = Project;

export type ArrayOfSocials = {
  socials: Social[];
};

export type ArrayOfRoutes = {
  routes: Route[];
};

export type ArrayOfProjects = {
  projects: Project[];
};