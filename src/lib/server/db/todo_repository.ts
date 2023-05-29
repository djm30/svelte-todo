import type { TodoRepository } from "./types";
import { eq } from "drizzle-orm";
import { todos } from "./schema";
import db from "./db";

export const todoRepository: TodoRepository = {
	create: async (todo) => {
		return await db.insert(todos).values(todo).returning().get();
	},
	find: async (id) => {
		return db.select().from(todos).where(eq(todos.id, id)).get();
	},
	all: async () => {
		return db.select().from(todos).all();
	},
	update: async (id, todo) => {
		return db.update(todos).set(todo).where(eq(todos.id, id)).returning().get();
	},
	delete: async (id) => {
		return db.delete(todos).where(eq(todos.id, id)).returning().get();
	}
};
