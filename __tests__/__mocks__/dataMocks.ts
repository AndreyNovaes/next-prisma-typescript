import { seed } from "../../prisma/initialData";

const projectsWithoudId = seed().projects
const routesWithoudId = seed().routes
const socialsWithoudId = seed().socials

const projects = projectsWithoudId.map((project, index) => ({
  ...project,
  id: index + 1,
}))

const routes = routesWithoudId.map((route, index) => ({
  ...route,

  id: index + 1,
}))

const socials = socialsWithoudId.map((social, index) => ({
  ...social,
  id: index + 1,
}))

const MockedData = {
  withoudId: {
    projects: projectsWithoudId,
    routes: routesWithoudId,
    socials: socialsWithoudId,
  },
  withId: {
    projects,
    routes,
    socials,
  },
};

export default MockedData;
