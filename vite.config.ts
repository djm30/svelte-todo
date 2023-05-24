// vite.config.js
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";

export default defineConfig({
    base: "./",
    plugins: [
        svelte(),
        Icons({
            compiler: "svelte",
        }),
    ],
});