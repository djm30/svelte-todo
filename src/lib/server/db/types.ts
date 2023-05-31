import type { InferModel } from "drizzle-orm";
import type { users, todos } from "./schema";

export type User = InferModel<typeof users, "select">;
export type NewUser = InferModel<typeof users, "insert">;

export type Todo = InferModel<typeof todos, "select">;
export type NewTodo = InferModel<typeof todos, "insert">;

export interface UserRepository {
	create: () => Promise<User>;
	find: (id: number) => Promise<User | undefined>;
	all: () => Promise<User[]>;
	update: (id: number, user: Partial<User>) => Promise<User | undefined>;
	delete: (id: number) => Promise<User | undefined>;
}

export interface TodoRepository {
	create: (todo: NewTodo) => Promise<Todo>;
	find: (id: number) => Promise<Todo | undefined>;
	findByUser: (user_id: number) => Promise<Todo[]>;
	all: () => Promise<Todo[]>;
	update: (id: number, todo: Partial<Todo>) => Promise<Todo | undefined>;
	delete: (id: number) => Promise<Todo | undefined>;
}
