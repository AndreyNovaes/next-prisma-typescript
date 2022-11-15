import { prismaMock } from "../../__mocks__/prismaMock";
import mockedData from "../../__mocks__/dataMocks";

const mockProjectsWithId = mockedData.withId.projects;
const mockProjectsWithoutId = mockedData.withoudId.projects;

type updateProject = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
}

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



