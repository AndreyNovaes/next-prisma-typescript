import { prisma } from '../../../lib/prisma';

describe('./pages/api/routes', () => {
  it('should return all routes', async () => {
    const routes = await prisma.routes.findMany();
    const { length } = routes;
    expect(routes).toBeInstanceOf(Array);
    expect(routes).toHaveLength(length);
    expect(routes[0]).toHaveProperty('id');
    expect(routes[0]).toHaveProperty('name');
    expect(routes[0]).toHaveProperty('path');
    expect(routes[length - 1]).toHaveProperty('id');
    expect(routes[length - 1]).toHaveProperty('name');
    expect(routes[length - 1]).toHaveProperty('path');
  })
})
