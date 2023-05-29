// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	// namespace svelte.JSX {
	// 	interface HTMLAttributes<T> {
	// 		onlongpress: () => void;
	// 	}
	// }


	// Mr stackover flow said this one for sveltekit, not sure what the dif is 
	namespace svelteHTML {
		interface HTMLAttributes<T> {
			"on:longpress"?: () => void;
		}
	}

}

export { };
