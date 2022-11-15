import { prismaMock } from "../../__mocks__/prismaMock";
import mockedData from "../../__mocks__/dataMocks";

const mockSocialsWithoutId = mockedData.withoudId.socials;
const mockSocialsWithId = mockedData.withId.socials;

describe("findMany and findUnique socials ./pages/api/socials.ts", () => {
  it("should get a Array of socials", async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.socials.findMany.mockResolvedValue(mockSocialsWithId);
    // chamo a função que eu quero testar(findMany)
    const socials = await prismaMock.socials.findMany();
    // verifico se o findMany foi chamado apenas 1 vez
    expect(prismaMock.socials.findMany).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(socials).toEqual(mockSocialsWithId);
  });

  it("should get a social", async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.socials.findUnique.mockResolvedValue(mockSocialsWithId[0]);
    const socialId = 1;
    // chamo a função que eu quero testar(findUnique)
    const social = await prismaMock.socials.findUnique({
      where: { id: socialId },
    });
    // verifico se o findUnique foi chamado apenas 1 vez
    expect(prismaMock.socials.findUnique).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(social).toEqual(mockSocialsWithId[0]);
  });
});

describe("create social ./pages/api/socials.ts", () => {
  it("should create a social", async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.socials.create.mockResolvedValue(mockSocialsWithId[0]);
    // chamo a função que eu quero testar(create)
    const social = await prismaMock.socials.create({
      data: mockSocialsWithoutId[0],
    });
    // verifico se o create foi chamado apenas 1 vez
    expect(prismaMock.socials.create).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(social).toEqual(mockSocialsWithId[0]);
  });
});

describe("update social ./pages/api/socials.ts", () => {
  it("should update a social", async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.socials.update.mockResolvedValue(mockSocialsWithId[0]);
    const socialId = 1;
    // chamo a função que eu quero testar(update)
    const social = await prismaMock.socials.update({
      where: { id: socialId },
      data: mockSocialsWithoutId[0],
    });
    // verifico se o update foi chamado apenas 1 vez
    expect(prismaMock.socials.update).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(social).toEqual(mockSocialsWithId[0]);
  });
});

describe("delete social ./pages/api/socials.ts", () => {
  it("should delete a social", async () => {
    // seto o retorno da promise do prismaMock
    prismaMock.socials.delete.mockResolvedValue(mockSocialsWithId[0]);
    const socialId = 1;
    // chamo a função que eu quero testar(delete)
    const social = await prismaMock.socials.delete({
      where: { id: socialId },
    });
    // verifico se o delete foi chamado apenas 1 vez
    expect(prismaMock.socials.delete).toHaveBeenCalledTimes(1);
    // verifico se o retorno da função é o valor esperado
    expect(social).toEqual(mockSocialsWithId[0]);
  });
});
