import type { Todo, NewTodo } from "$lib/types.js";
import { userRepo, todoRepo } from "$lib/server/db";
import { fail } from "@sveltejs/kit";

export async function load({ cookies }) {
	if (!cookies.get("id")) {
		const { id } = await userRepo.create();
		cookies.set("id", id.toString());
	}

	const todos = await todoRepo.findByUser(parseInt(cookies.get("id") as string));

	return {
		title: "Hello Todo",
		todos
	};
}

export const actions = {
	async add({ request, cookies }) {
		console.log("We are here");

		const data = await request.formData();

		const name = data.get("name");
		const desc = data.get("desc");

		console.log(name);

		if (!name) {
			return fail(400, { message: "Please provide a name" });
		}

		const todo: NewTodo = {
			name: name.toString(),
			desc: desc?.toString() || "",
			completed: 0,
			user_id: parseInt(cookies.get("id") as string)
		};

		const newTodo = await todoRepo.create(todo);
		return { success: true, todo: newTodo };
	}
};
