import { prisma } from '../../../lib/prisma';

describe('./pages/api/socials', () => {
  it('should return all socials', async () => {
    const socials = await prisma.socials.findMany();
    const { length } = socials;
    expect(socials).toBeInstanceOf(Array);
    expect(socials).toHaveLength(length);
    expect(socials[0]).toHaveProperty('id');
    expect(socials[0]).toHaveProperty('name');
    expect(socials[0]).toHaveProperty('link');
    expect(socials[length - 1]).toHaveProperty('id');
    expect(socials[length - 1]).toHaveProperty('name');
    expect(socials[length - 1]).toHaveProperty('link');
  })  
})
