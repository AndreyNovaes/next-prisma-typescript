import { prisma } from "../lib/prisma";
import { seed } from "./initialData";

const data = seed();

async function main() {
  for (const project of data.projects) {
    await prisma.projects.create({
      data: project,
    });
  }
  for (const social of data.socials) {
    await prisma.socials.create({
      data: social,
    });
  }
  for (const route of data.routes) {
    await prisma.routes.upsert({
      where: { path: route.path },
      update: {},
      create: route,
    });
  }
}

main().then(() => {
  process.exit(0);
});
