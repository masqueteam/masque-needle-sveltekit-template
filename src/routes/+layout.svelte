<script lang="ts">
  import FixedScaleLayout from "$lib/components/FixedScaleLayout.svelte";
  import "../app.css";
  let { children } = $props();
</script>

<FixedScaleLayout>
  {#await import("$lib/components/NeedleEngine.svelte")}
    <div class="absolute inset-0 flex justify-center items-center animate-pulse">
      Loading...
    </div>
  {:then { default: NeedleEngine }}
    <NeedleEngine />
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
      {@render children()}
    </div>
  {/await}
</FixedScaleLayout>
