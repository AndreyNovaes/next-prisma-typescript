import prisma from './prismaClient'

interface route {
  id: number
  name: string
  path: string
}

interface routes {
  routes: route[]
}

interface routeWithoutId {
  name: string
  path: string
}

export async function getRoutes(): Promise<routes> {
  const routes = await prisma.routes.findMany()
  return { routes }
}

export async function getRoute(id: number): Promise<route> {
  const route = await prisma.routes.findUnique({
    where: { id },
  })
  return route as route
}

export async function createRoute(data: routeWithoutId): Promise<route> {
  const route = await prisma.routes.create({
    data,
  })
  return route
}

export async function updateRoute(id: number, data: route): Promise<route> {
  const route = await prisma.routes.update({
    where: { id },
    data,
  })
  return route
}

export async function deleteRoute(id: number): Promise<route> {
  const route = await prisma.routes.delete({
    where: { id },
  })
  return route
}
