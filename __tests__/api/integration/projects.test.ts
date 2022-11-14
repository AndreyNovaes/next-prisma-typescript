import { prisma } from "../../../lib/prisma";

describe("./pages/api/projects", () => {
  it("should return all projects", async () => {
    const projects = await prisma.projects.findMany();
    const { length } = projects;
    expect(projects).toBeInstanceOf(Array);
    expect(projects).toHaveLength(length);
    expect(projects[0]).toHaveProperty("id");
    expect(projects[0]).toHaveProperty("title");
    expect(projects[0]).toHaveProperty("description");
    expect(projects[0]).toHaveProperty("tags");
    expect(projects[0]).toHaveProperty("image");
    expect(projects[0]).toHaveProperty("github");
    expect(projects[length - 1]).toHaveProperty("id");
    expect(projects[length - 1]).toHaveProperty("title");
    expect(projects[length - 1]).toHaveProperty("description");
    expect(projects[length - 1]).toHaveProperty("tags");
    expect(projects[length - 1]).toHaveProperty("image");
    expect(projects[length - 1]).toHaveProperty("github");
  })
})