<script lang="ts">
  import Container from "./lib/Container.svelte";
  import TodoContainer from "./lib/TodoContainer.svelte";
  import TodoForm from "./lib/TodoForm.svelte";
  import type { Todo } from "./types";

  let todos: Todo[] = [];
</script>

<Container>
  <main class="main">
    <h1>Hello Todo</h1>
    <div class="grid-container">
      <TodoForm bind:todos />
      <TodoContainer {todos} />
    </div>
  </main>
</Container>

<style>
  h1 {
    margin-bottom: 1rem;
  }

  .main {
    margin: auto;
    width: fit-content;
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
      
    }
  }
</style>
