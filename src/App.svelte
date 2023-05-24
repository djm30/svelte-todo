<script lang="ts">
    import Container from "./lib/Container.svelte";
    import TodoContainer from "./lib/TodoContainer.svelte";
    import TodoForm from "./lib/TodoForm.svelte";
    import type { Todo } from "./types";

    let todos: Todo[] = [];

    // TODO
    // Make button go red and shake side to side if no todo name has been entered
    // Save todos to localstorage
    // Drag and drop kanban that you can move todos to, todos will originate in the list as is, an inbox of sorts
    // Setup github actions to deploy to github pages
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
