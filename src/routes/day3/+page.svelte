<script lang="ts">
	import { rollPresent } from './Snippet.svelte';

	const getRandomInt = () => Math.floor(Math.random() * 100);
	const numPresents = Array.from({ length: 10 }, (_, i) => i + 1);
</script>

<div class="flex flex-wrap gap-4">
	{#each numPresents}
		{@render rollPresent(getRandomInt())}
	{/each}
</div>
