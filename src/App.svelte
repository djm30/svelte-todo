<script lang="ts">
    import { onMount } from "svelte";
    import Container from "./lib/Container.svelte";
    import TodoContainer from "./lib/TodoContainer.svelte";
    import TodoForm from "./lib/TodoForm.svelte";
    import type { Todo } from "./types";

    let todos: Todo[] = [];
    let todosFetched = false;

    $: {
        if (todosFetched) {
            console.log("Saving todos to localstorage");
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    onMount(() => {
        let todosFromLocalStorage = localStorage.getItem("todos");
        console.log(todosFromLocalStorage);
        if (todosFromLocalStorage) {
            todos = JSON.parse(todosFromLocalStorage) as Todo[];
        }
        todosFetched = true;
    });

    // TODO
    // Save todos to localstorage
    // Conversion to sveltekit
    // Drag and drop kanban that you can move todos to, todos will originate in the list as is, an inbox of sorts
    // Setup github actions to deploy to github pages
    // ChatGPT integration to parse todos and estimate due dates if any would be a pretty cool thing to do in the future
    // Auth, pocketbase/supabase integration
    // Streak / habit tracker
    // Pomodoro timer
    // Pomodoro timer integration with todos
    // Pomodoro timer integration with streaks
    // Very basic analytics
    // So much potential here for a very cool app this will be fun
</script>

<svelte:head>
    <title>Hello Todo</title>
    <meta name="robots" content="noindex nofollow" />
    <html lang="en" />
</svelte:head>

<Container>
    <main class="main">
        <h1>Hello Todo</h1>
        <div class="grid-container">
            <TodoForm bind:todos />
            <TodoContainer bind:todos />
        </div>
    </main>
</Container>

<style>
    h1 {
        margin-bottom: 1rem;
    }

    .main {
        margin: auto;
        width: 80%;
        max-width: 400px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1;
        grid-gap: 20px;
        width: 100%;
        /* overflow: hidden; */
    }

    @media screen and (min-width: 1000px) {
        .grid-container {
            grid-template-columns: 1fr 2fr;
            grid-gap: 3rem;
        }

        .main {
            margin: none;
            width: fit-content;
            max-width: none;
        }
    }

    @media screen and (max-width: 400px) {
        .main {
            width: 100%;
        }
    }
</style>
