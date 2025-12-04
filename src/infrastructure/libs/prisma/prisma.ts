import { PrismaClient } from "./generated";
const prisma = new PrismaClient({ log: ['info', 'warn', 'error'] });

export { prisma };
