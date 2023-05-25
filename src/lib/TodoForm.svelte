<script lang="ts">
    import type { Todo } from "../types";

    export let todos: Todo[];

    let todoName = "";
    let todoDescription = "";

    // Button only goes red after the first submit
    let error = true;
    let playAnimation = false;
    let animationPlayed = false;
    let animationInProgress = false;

    $: if (todoName.length === 0) {
        error = true;
    } else {
        error = false;
        animationPlayed = false;
    }

    let animationResetInterval: ReturnType<typeof setInterval>;
    function onSubmit() {
        if (error) {
            playAnimation = true;
            animationPlayed = true;
            animationResetInterval = setTimeout(() => {
                playAnimation = false;
            }, 400);

            return;
        }

        // Generate big random id
        let id = Math.floor(Math.random() * 10e15);
        todos = [
            ...todos,
            { id, name: todoName, desc: todoDescription, completed: true },
        ];
        id += 1;
        todoName = "";
        todoDescription = "";
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
        <button
            on:animationstart={() => {
                animationInProgress = true;
            }}
            on:animationend={() => {
                animationInProgress = false;
            }}
            type="submit"
            class:error-animation={playAnimation}
            class:error={animationPlayed && error}>Submit</button
        >
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
        display: flex;
        flex-direction: column;
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
        cursor: pointer;
        user-select: none;
    }

    button:hover {
        background-color: rgb(101, 124, 240);
    }

    .error {
        background-color: hsl(0, 70%, 64%);
    }

    .error:hover {
        background-color: hsl(0, 70%, 54%);
    }
    .error-animation {
        animation: shake 400ms ease-in-out;
    }

    .todo-tip {
        margin-top: 0.8rem;
    }

    @media screen and (min-width: 1000px) {
        form {
            width: 260px;
        }
    }

    /* @keyframes shake {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-10px);
        }
        50% {
            transform: translateX(10px);
        }
        75% {
            transform: translateX(-5px);
        }
        100% {
            transform: translateX(0);
        }
    } */

    @keyframes shake {
        0% {
            transform: translateX(30px);
        }
        20% {
            transform: translateX(-30px);
        }
        40% {
            transform: translateX(15px);
        }
        60% {
            transform: translateX(-15px);
        }
        80% {
            transform: translateX(8px);
        }
        100% {
            transform: translateX(0px);
        }
    }

    /* Make button animation that shakes it side to side quickly and springlike */
</style>
