import { PrismaClient } from '@prisma/client'

// Prevent multiple instances of Prisma Client in development
// this is just a singletons pattern
// i also use a different in mocks inside __tests__ folder, so i can mock everything
export const prisma = new PrismaClient()
