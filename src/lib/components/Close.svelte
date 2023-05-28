<script lang="ts">
    export let fill = "none";
    export let stroke = "currentColor";
    export let strokeWidth = "32";
    export let width = "24px";
    export let height = "24px";
    export let viewBox = "0 0 512 512";
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" {viewBox}
    ><path
        {fill}
        {stroke}
        {width}
        {height}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        d="M368 368L144 144M368 144L144 368"
    />
</svg>
