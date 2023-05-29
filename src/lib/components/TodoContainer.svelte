<script lang="ts">
    import SingleTodo from "./SingleTodo.svelte";
    import type { Todo } from "../types";
    import { flip } from "svelte/animate";

    export let todos: Todo[]

    const toggleComplete = (complete: number) => complete === 0 ? 1 : 0;
    

    function handleComplete(event: CustomEvent<number>) {
        todos = todos.map((todo) => {
            if (todo.id === event.detail) {
                return { ...todo, completed: toggleComplete(todo.completed)};
            }
            return todo;
        });
    }

    function handleDelete(event: CustomEvent<number>) {
        todos = todos.filter((todo) => event.detail !== todo.id);
    }
</script>

<ul>
    {#each todos as todo (todo.id)}
        <div animate:flip={{ duration: 200 }}>
            <SingleTodo
                {todo}
                on:complete={handleComplete}
                on:delete={handleDelete}
            />
        </div>
    {/each}
</ul>

<style>
    ul {
        margin-top: 1rem;
        width: 100%;
    }

    @media (min-width: 1000px) {
        ul {
            margin-top: unset;
        }
    }
</style>
