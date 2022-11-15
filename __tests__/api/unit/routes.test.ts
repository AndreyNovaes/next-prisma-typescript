import { prismaMock } from '../../__mocks__/prismaMock';
import mockedData from '../../__mocks__/dataMocks';

const mockRoutesWithoutId = mockedData.withoudId.routes;
const mockRoutesWithId = mockedData.withId.routes

describe('findMany and findUnique routes ./pages/api/routes.ts', () => {
  it('should get a Array of routes', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.routes.findMany.mockResolvedValue(mockRoutesWithId);
    // chamo a função que eu quero testar(findMany)
    const routes = await prismaMock.routes.findMany();
    // verifico se o findMany foi chamado apenas 1 vez
    expect(prismaMock.routes.findMany).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(routes).toEqual(mockRoutesWithId);
  });

  it('should get a route', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.routes.findUnique.mockResolvedValue(mockRoutesWithId[0]);
    const routeId = 1;
    // chamo a função que eu quero testar(findUnique)
    const route = await prismaMock.routes.findUnique({
      where: { id: routeId },
    });
    // verifico se o findUnique foi chamado apenas 1 vez
    expect(prismaMock.routes.findUnique).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(route).toEqual(mockRoutesWithId[0]);
  });
})

describe('create route ./pages/api/routes.ts', () => {
  it('should create a route', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.routes.create.mockResolvedValue(mockRoutesWithId[0]);
    // chamo a função que eu quero testar(create)
    const route = await prismaMock.routes.create({
      data: mockRoutesWithoutId[0],
    });
    // verifico se o create foi chamado apenas 1 vez
    expect(prismaMock.routes.create).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(route).toEqual(mockRoutesWithId[0]);
  });
});

describe('update route ./pages/api/routes.ts', () => {
  it('should update a route', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.routes.update.mockResolvedValue(mockRoutesWithId[0]);
    // chamo a função que eu quero testar(update)
    const route = await prismaMock.routes.update({
      where: { id: 1 },
      data: mockRoutesWithoutId[0],
    });
    // verifico se o update foi chamado apenas 1 vez
    expect(prismaMock.routes.update).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(route).toEqual(mockRoutesWithId[0]);
  });
});

describe('delete route ./pages/api/routes.ts', () => {
  it('should delete a route', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.routes.delete.mockResolvedValue(mockRoutesWithId[0]);
    // chamo a função que eu quero testar(delete)
    const route = await prismaMock.routes.delete({
      where: { id: 1 },
    });
    // verifico se o delete foi chamado apenas 1 vez
    expect(prismaMock.routes.delete).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(route).toEqual(mockRoutesWithId[0]);
  });
});
