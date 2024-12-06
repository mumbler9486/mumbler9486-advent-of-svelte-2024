<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	let value = $state('1');
	const numPresents = $derived(value === '' || value === null ? 0 : parseInt(value));
	const listPresents = $derived(Array.from({ length: numPresents }, (_, i) => i + 1));
</script>

<Input label="Number of Presents?" placeholder="Type here" bind:value />

{#snippet present(index: number)}
	<div class="">
		<img class="w-20" src="/present.png" alt="Present Icon" />
		Present #{index + 1}
	</div>
{/snippet}

<div class="flex flex-wrap gap-4">
	{#each listPresents, i}
		{@render present(i)}
	{/each}
</div>
