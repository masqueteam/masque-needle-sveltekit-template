<script lang="ts">
	import FixedScaleLayout from '$lib/components/FixedScaleLayout.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<FixedScaleLayout>
	{#await import("$lib/components/NeedleEngine.svelte")}
		<div class="absolute inset-0 flex animate-pulse items-center justify-center">Loading...</div>
	{:then { default: NeedleEngine }}
		<NeedleEngine />
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
			{@render children()}
		</div>
	{/await}
</FixedScaleLayout>
