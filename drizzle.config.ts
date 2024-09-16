import { defineConfig } from 'drizzle-kit';

console.log('DATABASE_URL', process.env.DATABASE_URL);

export default defineConfig({
  schema: 'src/db/schema.ts',
  out: 'src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
