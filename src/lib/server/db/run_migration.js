import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('./src/lib/server/db/db.sqlite3');
const db = drizzle(sqlite);

migrate(db, {
	migrationsFolder: './src/lib/server/db/migrations'
});
