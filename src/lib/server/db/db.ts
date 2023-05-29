import { drizzle } from "drizzle-orm/better-sqlite3";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { users, todos } from "./schema";
import type { User, Todo } from "./types";
import Database from "better-sqlite3";

const sqlite = new Database("./src/lib/server/db/db.sqlite3");
console.log(sqlite);
const db = drizzle(sqlite);

export default db;
