<script lang="ts">
  import Container from "../lib/Container.svelte";
  import TodoContainer from "../lib/TodoContainer.svelte";
  import TodoForm from "../lib/TodoForm.svelte";
  import type { Todo } from "../types";

  let id = 1;
  let todoName;
  let todoDescription;

  export let todos: Todo[];

  function onSubmit() {
    todos = [
      ...todos,
      { id, name: todoName, desc: todoDescription, completed: false },
    ];
    id += 1;
  }
</script>

<div>
  <form on:submit|preventDefault={onSubmit}>
    <label>
      <p>Todo Name:</p>
      <input bind:value={todoName} />
    </label>
    <label>
      <p>Todo Description:</p>
      <input bind:value={todoDescription} />
    </label>
    <button type="submit">Submit</button>
  </form>

  {#if todos.length > 0}
    <p class="todo-tip">
      You have: {todos.length} todo{todos.length > 1 ? "s" : ""}
    </p>
  {:else}
    <p class="todo-tip">Add a Todo to get started</p>
  {/if}
</div>

<style>
  input {
    background-color: #1e1e1e;
    padding: 4px;
    border-radius: 6px;
    width: 100%;
  }

  form {
    /* background-color: #4b4a4a; */
    display: flex;
    flex-direction: column;
    max-width: 260px;
    /* padding: 5px 10px;
      gap: 5px; */
    overflow: hidden;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  button {
    width: 100%;
    text-align: center;
    padding: 6px 4px;
    border-radius: 6px;
    background-color: rgb(84, 109, 235);
    transition: all 200ms;
    margin-top: 0.8rem;
  }

  button:hover {
    background-color: rgb(101, 124, 240);
  }

  .todo-tip {
    margin-top: 0.8rem;
  }
</style>
