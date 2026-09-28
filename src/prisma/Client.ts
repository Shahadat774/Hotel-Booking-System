import 'dotenv/config';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// This assumes your generated client is currently in node_modules, 
// adjust the path if you configured a custom output path.
import { PrismaClient } from '@prisma/client'; 

// 1. Set up the Node-Postgres connection pool
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// 2. Instantiate the Prisma driver adapter
const adapter = new PrismaPg(pool);

// 3. Pass the adapter to your PrismaClient instance
export const prisma = new PrismaClient({ adapter });
