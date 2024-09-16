import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const userTable = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 100 }).unique().notNull(),
  password: varchar('password', { length: 64 }).notNull(),
});

export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;
