<script lang="ts">
	import TodoContainer from '$lib/components/TodoContainer.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import type { PageData } from './$types';
	import type { Todo } from '$lib/types';
	import "../app.css"
	
	export let data: PageData;
	let todos: Todo[] = data.todos;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<main class="main">
	<h1>Hello Todo</h1>
	<div class="grid-container">
		<TodoForm bind:todos />
		<TodoContainer bind:todos />
	</div>
</main>

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
