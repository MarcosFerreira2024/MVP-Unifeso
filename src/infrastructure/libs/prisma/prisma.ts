import { PrismaClient } from "./generated/index.js";
const prisma = new PrismaClient({ log: ['info', 'warn', 'error'] });

export { prisma };
