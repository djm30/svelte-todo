// Custom events

declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        onlongpress: () => void;
    }
}
