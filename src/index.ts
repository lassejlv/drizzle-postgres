import { db } from './db';
import { userTable } from './db/schema';

const start = performance.now();

const response = await db.select().from(userTable).limit(1);
console.log(response);

const end = performance.now();
console.log(`Query took ${(end - start).toFixed(2)} ms`);
