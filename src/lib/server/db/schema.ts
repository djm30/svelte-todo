import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true })
});

export const todos = sqliteTable("todos", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	desc: text("desc"),
	completed: integer("completed").notNull(),
	user_id: integer("user_id")
		.references(() => users.id)
		.notNull()
});
