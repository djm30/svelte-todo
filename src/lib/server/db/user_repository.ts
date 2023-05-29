import type { UserRepository } from "./types";
import { eq } from "drizzle-orm";
import { users } from "./schema";

import db from "./db";

export const userRepository: UserRepository = {
	create: async () => {
		return await db.insert(users).values({}).returning().get();
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
