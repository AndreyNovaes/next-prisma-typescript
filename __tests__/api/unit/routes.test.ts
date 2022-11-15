import { prismaMock } from "../../__mocks__/prismaMock";
import mockedData from "../../__mocks__/dataMocks";

const mockRoutesWithoutId = mockedData.withoudId.routes;
const mockRoutesWithId = mockedData.withId.routes

type updateRoute = {
  id: number;
  name: string;
  path: string;
}

describe("findMany and findUnique routes ./pages/api/routes.ts", () => {
  it("should get a Array of routes", async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.routes.findMany.mockResolvedValue(mockRoutesWithId);
    // chamo a função que eu quero testar(findMany)
    const routes = await prismaMock.routes.findMany();
    // verifico se o findMany foi chamado apenas 1 vez
    expect(prismaMock.routes.findMany).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(routes).toEqual(mockRoutesWithId);
  });

  it("should get a route", async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.routes.findUnique.mockResolvedValue(mockRoutesWithId[0]);
    // chamo a função que eu quero testar(findUnique)
    const routeId = 1;
    const route = await prismaMock.routes.findUnique({
      where: { id: routeId },
    });
    // verifico se o findUnique foi chamado apenas 1 vez
    expect(prismaMock.routes.findUnique).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(route).toEqual(mockRoutesWithId[0]);
  });
});

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

describe('update routes ./pages/api/routes.ts', () => {
  it('should create a route and then completely update the route created', async () => {
    // crio um novo elemento route
    prismaMock.routes.create.mockResolvedValue(mockRoutesWithId[0]);
    const routeCreated = await prismaMock.routes.create({
      data: mockRoutesWithoutId[0],
    });
    expect(routeCreated).toEqual(mockRoutesWithId[0]);
    // crio um novo elemento route

    // construo o eleemnto que substituira completamente o route criado, com o id do objeto que foi criado
    const routeId = 1;
    const mockUpdate = { routeId, ...mockRoutesWithoutId[3] } as unknown as updateRoute;
    // construo o objeto que será atualizado, com o id do objeto que foi criado

    // seto o retorno da promise do prismaMock
    prismaMock.routes.update.mockResolvedValue(mockUpdate);
    // chamo a função que eu quero testar(update)
    const route = await prismaMock.routes.update({
      where: { id: routeId },
      data: mockRoutesWithoutId[3],
    });
    // verifico se o update foi chamado apenas 1 vez
    expect(prismaMock.routes.update).toHaveBeenCalledTimes(1);
    
    // verifico se o retorno da função é o valor esperado
    expect(route).toEqual(mockUpdate);
  });
});

describe('DELETE routes ./pages/api/routes.ts', () => {
  it('should create a route and then delete the route created', async () => {
    // crio um novo elemento route
    prismaMock.routes.create.mockResolvedValue(mockRoutesWithId[0]);
    const routeCreated = await prismaMock.routes.create({
      data: mockRoutesWithoutId[0],
    });
    expect(routeCreated).toEqual(mockRoutesWithId[0]);
    // crio um novo elemento route

    // seto o retorno da promise do prismaMock
    prismaMock.routes.delete.mockResolvedValue(mockRoutesWithId[0]);
    // chamo a função que eu quero testar(delete)
    const routeId = 1;
    await prismaMock.routes.delete({
      where: { id: routeId },
    });
    // verifico se o delete foi chamado apenas 1 vez
    expect(prismaMock.routes.delete).toHaveBeenCalledTimes(1);
    // como o delete não retorna nada, não há como verificar o retorno da função
  });
});
