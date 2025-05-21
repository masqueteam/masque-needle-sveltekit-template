<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    let { children } = $props();

    function adjustScale() {
        const targetHeight = 812;
        const currentHeight = window.innerHeight;

        const scale = currentHeight / targetHeight;

        document.body.style.transform = `scale(${scale})`;
        document.body.style.transformOrigin = "top left";

        document.body.style.width = `${100 / scale}%`;
        document.body.style.height = `${targetHeight}px`;
    }

    onMount(() => {
        adjustScale();
        window.addEventListener("resize", adjustScale);
    });

    onDestroy(() => {
        window.removeEventListener("resize", adjustScale);
    });
</script>

<div
    class="absolute left-1/2 -translate-x-1/2 w-full h-[812px] max-w-[609px] min-w-[375px] bg-white"
>
    {@render children()}
</div>
