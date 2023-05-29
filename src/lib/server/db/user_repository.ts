import type { UserRepository } from "./types";
import { eq, sql } from "drizzle-orm";
import { users } from "./schema";

import db from "./db";

export const userRepository: UserRepository = {
	create: async () => {
		// Jank way to get the highest ID instead of just inserting a blank row and letting sqlite autoincrement
		const highestId = await db
			.select({ id: sql<number>`MAX(${users.id})` })
			.from(users)
			.get();
		const id = highestId ? highestId.id + 1 : 1;

		return await db.insert(users).values({ id }).returning().get();
	},
	find: async (id) => {
		return await db.select().from(users).where(eq(users.id, id)).get();
	},
	all: async () => {
		return await db.select().from(users).all();
	},
	update: async (id, user) => {
		throw new Error("Not implemented");
	},
	delete: async (id) => {
		return await db.delete(users).where(eq(users.id, id)).returning().get();
	}
};
