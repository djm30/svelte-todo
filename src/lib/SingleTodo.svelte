<script lang="ts">
  import type { Todo } from "../types";
  // import Check from "~/icons/mdi/check";

  export let todo: Todo;
</script>

<li class="todo-container">
  <div>
    <h3>
      {todo.name}
    </h3>
    {#if todo.desc}
      <p>{todo.desc}</p>
    {:else}
      <p class="empty-space" />
    {/if}
  </div>
  <!-- <div><Check /></div> -->
</li>

<style>
  .todo-container {
    padding: 0.8rem;
    background-color: rgb(67, 65, 65);
    width: 260px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .empty-space {
    height: 1em;
  }

  @media screen and (min-width: 1000px) {
    .todo-container {
      max-width: none;
      width: 100%;
    }
  }
</style>
