<script lang="ts">
    import SingleTodo from "./SingleTodo.svelte";
    import type { Todo } from "../types";

    export let todos: Todo[];

    function handleComplete(event: CustomEvent<number>) {
        todos = todos.map((todo) => {
            if (todo.id === event.detail) {
                return { ...todo, completed: !todo.completed };
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
        <SingleTodo
            {todo}
            on:complete={handleComplete}
            on:delete={handleDelete}
        />
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
