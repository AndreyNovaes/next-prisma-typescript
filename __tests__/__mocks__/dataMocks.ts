  export const GET = {
    routes: [
      {
        id: 1,
        name: 'Home',
        path: '/',
      },
      {
        id: 2,
        name: 'About',
        path: '/about',
      },
      {
        id: 3,
        name: 'Contact',
        path: '/contact',
      },
    ],
    route: {
      id: 1,
      name: 'Home',
      path: '/',
    },
  }

  export const POST = {
    newRoute: {
      name: 'New Route',
      path: '/new-route',
    },
    routeCreated: {
      id: 1,
      name: 'New Route',
      path: '/new-route',
    },
  }

  export const PUT = {
    route: {
      id: 1,
      name: 'Home',
      path: '/',
    },
  }

  export const PATCH = {
    route: {
      id: 1,
      name: 'Home',
      path: '/home',
    },
  }

  export const DELETE = {
    route: {
      id: 1,
      name: 'Home',
      path: '/',
    },
    id: 1,
  }
