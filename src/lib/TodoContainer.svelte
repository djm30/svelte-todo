<script lang="ts">
  import SingleTodo from "./SingleTodo.svelte";
  import type { Todo } from "../types";

  export let todos: Todo[];
</script>

<ul>
  {#each todos as todo (todo.id)}
    <SingleTodo {todo} />
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
