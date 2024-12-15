<script lang="ts">
	import { getMagicNumberState } from '$lib/stores/magicNumber.svelte';
</script>

<h1 class="text-5xl">Your lucky magic number!</h1>
<p class="mb-8">Refresh page to get magic number!</p>
{#if !getMagicNumberState()}
	<span class="loading loading-spinner loading-lg"></span>
{:else}
	<p class="text-9xl">{Math.floor(Math.random() * 100)}</p>
{/if}
