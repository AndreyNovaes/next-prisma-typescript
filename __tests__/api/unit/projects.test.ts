import { prismaMock } from "../../__mocks__/prismaMock";
import mockedData from "../../__mocks__/dataMocks";

const mockProjectsWithId = mockedData.withId.projects;
const mockProjectsWithoutId = mockedData.withoudId.projects;

describe('findMany and findUnique projects ./pages/api/projects.ts', () => {
  it('should get a Array of projects', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.projects.findMany.mockResolvedValue(mockProjectsWithId);
    // chamo a função que eu quero testar(findMany)
    const projects = await prismaMock.projects.findMany();
    // verifico se o findMany foi chamado apenas 1 vez
    expect(prismaMock.projects.findMany).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(projects).toEqual(mockProjectsWithId);
  });

  it('should get a project', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.projects.findUnique.mockResolvedValue(mockProjectsWithId[0]);
    const projectId = 1;
    // chamo a função que eu quero testar(findUnique)
    const project = await prismaMock.projects.findUnique({
      where: { id: projectId }
    });
    // verifico se o findUnique foi chamado apenas 1 vez
    expect(prismaMock.projects.findUnique).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(project).toEqual(mockProjectsWithId[0]);
  });
});

describe('create project ./pages/api/projects.ts', () => {
  it('should create a project', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.projects.create.mockResolvedValue(mockProjectsWithId[0]);
    // chamo a função que eu quero testar(create)
    const project = await prismaMock.projects.create({
      data: mockProjectsWithoutId[0]
    });
    // verifico se o create foi chamado apenas 1 vez
    expect(prismaMock.projects.create).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(project).toEqual(mockProjectsWithId[0]);
  });
});

describe('update project ./pages/api/projects.ts', () => {
  it('should update a project', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.projects.update.mockResolvedValue(mockProjectsWithId[0]);
    // chamo a função que eu quero testar(update)
    const project = await prismaMock.projects.update({
      where: { id: mockProjectsWithId[0].id },
      data: mockProjectsWithoutId[0],
    });
    // verifico se o update foi chamado apenas 1 vez
    expect(prismaMock.projects.update).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(project).toEqual(mockProjectsWithId[0]);
  });
})

describe('delete project ./pages/api/projects.ts', () => {
  it('should delete a project', async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.projects.delete.mockResolvedValue(mockProjectsWithId[0]);
    // chamo a função que eu quero testar(delete)
    const project = await prismaMock.projects.delete({
      where: { id: mockProjectsWithId[0].id },
    });
    // verifico se o delete foi chamado apenas 1 vez
    expect(prismaMock.projects.delete).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(project).toEqual(mockProjectsWithId[0]);
  });
});
