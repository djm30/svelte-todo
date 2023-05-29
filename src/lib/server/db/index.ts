import type { UserRepository, TodoRepository } from "./types";
import { userRepository } from "./user_repository";
import { todoRepository } from "./todo_repository";

// Drop in repositories here
const CHOSEN_USER_REPOSITORY: UserRepository = userRepository;
const CHOSEN_TODO_REPOSITORY: TodoRepository = todoRepository;

// Export above repositories with different names
export const userRepo: UserRepository = CHOSEN_USER_REPOSITORY;
export const todoRepo: TodoRepository = CHOSEN_TODO_REPOSITORY;
