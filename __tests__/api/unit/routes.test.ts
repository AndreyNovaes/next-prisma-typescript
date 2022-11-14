import { prismaMock } from "../../__mocks__/prismaMock";
import { GET, POST, PUT, PATCH, DELETE } from "../../__mocks__/dataMocks";

describe("Routes", () => {
  it("should get routes", async () => {
    prismaMock.routes.findMany.mockResolvedValue(GET.routes);
    const routes = await prismaMock.routes.findMany();
    expect(prismaMock.routes.findMany).toHaveBeenCalledTimes(1);
    expect(routes).toEqual(GET.routes);
  });

  it("should get a route", async () => {
    prismaMock.routes.findUnique.mockResolvedValue(GET.route);
    const neededId = 1;
    const route = await prismaMock.routes.findUnique({
      where: { id: neededId },
    });
    expect(prismaMock.routes.findUnique).toHaveBeenCalledTimes(1);
    expect(route).toEqual(GET.route);
  });

  it("should create a route", async () => {
    prismaMock.routes.create.mockResolvedValue(POST.routeCreated);
    const data = POST.newRoute;
    const route = await prismaMock.routes.create({
      data,
    });
    expect(prismaMock.routes.create).toHaveBeenCalledTimes(1);
    expect(route).toEqual(POST.routeCreated);
    console.log(route, POST.routeCreated);
  });

  it("should create a route and delete", async () => {
    const id = 1; // id da rota que será criada e deletada

    prismaMock.routes.create.mockResolvedValue(POST.routeCreated);
    const data = POST.newRoute; // data = new route sem o id, routeCreated = new route com o id

    const route = await prismaMock.routes.create({
      data,
    });
    expect(prismaMock.routes.create).toHaveBeenCalledTimes(1);
    // create usa o mock do prisma, que utiliza o atributo create, que deve ser chamado uma vez
    expect(route).toEqual(POST.routeCreated);
    // route deve ser igual a routeCreated(new route com o id)

    prismaMock.routes.delete.mockResolvedValue(DELETE.route);
    const deletedRoute = await prismaMock.routes.delete({
      where: { id },
    });

    // delete usa o mock do prisma, que utiliza o atributo delete, que deve ser chamado uma vez
    expect(prismaMock.routes.delete).toHaveBeenCalledTimes(1);
    // deletedRoute deve ser igual a DELETE.route(mock do que eu espero que seja retornado)
    expect(deletedRoute).toEqual(DELETE.route);
  });

  it("should create a route, completely update the route and parcially update a route POST, PUT and PATCH", async () => {
    const id = 1; // id da rota que será criada, atualizada e deletada

    prismaMock.routes.create.mockResolvedValue(POST.routeCreated);
    const data = POST.newRoute; // data = new route sem o id, routeCreated = new route com o id

    const route = await prismaMock.routes.create({
      data,
    });
    expect(prismaMock.routes.create).toHaveBeenCalledTimes(1);
    // create usa o mock do prisma, que utiliza o atributo create, que deve ser chamado uma vez
    expect(route).toEqual(POST.routeCreated);
    // route deve ser igual a routeCreated(new route com o id)

    const putData = PUT.route; // modifica completamente o route com o id 1
    prismaMock.routes.update.mockResolvedValue(putData);

    const updatedRoute = await prismaMock.routes.update({
      where: { id },
      data: PUT.route,
    });

    // update usa o mock do prisma, que utiliza o atributo update, que deve ser chamado uma vez
    expect(prismaMock.routes.update).toHaveBeenCalledTimes(1);
    // updatedRoute deve ser igual a PUT.route
    expect(updatedRoute).toEqual(PUT.route);

    const patchData = PATCH.route; // modifica parcialmente o route com o id 1
    prismaMock.routes.update.mockResolvedValue(patchData);
    
    const patchedRoute = await prismaMock.routes.update({
      where: { id },
      data: PATCH.route,
    });

    // update usa o mock do prisma, que utiliza o atributo update, que deve ser chamado mais uma vez
    expect(prismaMock.routes.update).toHaveBeenCalledTimes(2);

    // patchedRoute deve ser igual a PATCH.route(mock do que eu espero que seja retornado)
    expect(patchedRoute).toEqual(PATCH.route);
  });
});
