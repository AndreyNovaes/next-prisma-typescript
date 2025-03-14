import { PrismaClient } from '@prisma/client'

// Prevent multiple instances of Prisma Client in development
// this is just a singletons pattern
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma