import type { Todo } from "$lib/types.js";
import { userRepo, todoRepo } from "$lib/server/db";

export async function load({ cookies }) {
	console.log("here");
	if (!cookies.get("id")) {
		const id = await userRepo.create();
		console.log(id);
		cookies.set("id", id.toString());
	}

	console.log(cookies.get("id"));

	// Return TODOs for this user

	const todos: Todo[] = [
		{
			id: 1,
			name: "Todo 1",
			desc: "This is a todo",
			completed: 0,
			user_id: 1
		},
		{
			id: 2,
			name: "Todo 2",
			desc: "This is another todo",
			completed: 0,
			user_id: 1
		}
	];

	return {
		title: "Hello Todo",
		todos
	};
}
