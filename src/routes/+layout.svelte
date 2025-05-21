<script lang="ts">
  import FixedScaleLayout from "$lib/components/FixedScaleLayout.svelte";
    import { onMount } from "svelte";
  import "../app.css";
  let { children } = $props();
  onMount(() => {
    console.log("NeedleEngine loaded");
  });
</script>

<FixedScaleLayout>
  <div
    class="absolute inset-0 flex justify-center items-center"
  >
    {#await import("$lib/components/NeedleEngine.svelte")}
      <div class="absolute text-gl text-white animate-pulse">Loading...</div>
    {:then { default: NeedleEngine }}
      <NeedleEngine />
      {@render children()}
    {/await}
  </div>
</FixedScaleLayout>
