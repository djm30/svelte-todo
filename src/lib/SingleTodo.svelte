<script lang="ts">
    import type { Todo } from "../types";
    import { fly, fade } from "svelte/transition";
    import { createEventDispatcher, onMount } from "svelte";
    import Checkmark from "./Checkmark.svelte";
    import Close from "./Close.svelte";

    export let todo: Todo;
    let width: number;

    let dispatch = createEventDispatcher();

    // Used to create unique id for label and input
    let labelHash = (Math.random() * 10e15).toString(16);

    function handleComplete() {
        dispatch("complete", todo.id);
    }

    async function handleDelete() {
        dispatch("delete", todo.id);
    }
</script>

<li
    in:fly={{ y: 300, duration: 300 }}
    out:fly={{ x: 300, duration: 300 }}
    class="todo-container"
    bind:clientHeight={width}
>
    <div class="svg-row">
        <!-- how do i make la -->
        <label for={labelHash} class:hide-before={todo.completed}>
            <input on:click={handleComplete} id={labelHash} type="checkbox" />
        </label>

        <div>
            <h3>
                {todo.name}
            </h3>
            <!-- {#if todo.desc}
                <p>{todo.desc}</p>
            {:else}
                <p class="empty-space" />
            {/if} -->

            <p class="desc">{todo.desc}</p>
        </div>
    </div>

    <button on:click={handleDelete} class="svg-container close"
        ><Close /></button
    >
</li>

<style>
    :root {
        --svg-size: 26px;
        --padding: 6px;
        --checkbox-size: 24px;
    }

    input {
        display: none;
    }

    label::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(var(--checkbox-size) - 6px);
        height: calc(var(--checkbox-size) - 6px);
        border-radius: 50%;
        background-color: rgb(84, 109, 235);
        transition: all 0.2s ease-in-out;
    }

    .hide-before::before {
        background-color: transparent;
    }

    label {
        cursor: pointer;
        width: 24px;
        height: 24px;
        background-color: #1e1e1e;
        border-radius: 50%;
        position: relative;
    }

    label::after {
        background-color: transparent;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(var(--checkbox-size) + 4px);
        height: calc(var(--checkbox-size) + 4px);
        border-radius: 50%;
        border: 0.5px solid #ddcece;
        box-sizing: border-box;
    }

    .todo-container {
        position: relative;
        padding: 0.8rem;
        background-color: rgb(67, 65, 65);
        width: 100%;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.2s ease-in-out;
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

    .svg-container {
        width: calc(var(--svg-size) + var(--padding) * 2);
        height: calc(var(--svg-size) + var(--padding) * 2);
        padding: var(--padding);
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .svg-container:hover {
        transform: translate(0, -1px);
    }

    .check {
        background-color: hsl(127, 49%, 62%);
    }

    .check:hover {
        background-color: hsl(127, 49%, 52%);
    }

    .close {
        z-index: 4;
        background-color: hsl(0, 70%, 64%);
    }

    .close:hover {
        background-color: hsl(0, 70%, 54%);
    }

    .svg-row {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .desc {
        font-size: 0.8rem;
        color: #a8a8a8;
    }

    @media screen and (max-width: 400px) {
        :root {
            --svg-size: 20px;
            --padding: 4px;
            --checkbox-size: 20px;
        }
    }
</style>
