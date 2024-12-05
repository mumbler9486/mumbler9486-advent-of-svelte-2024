<script lang="ts">
	let value = $state('1');
	const numPresents = $derived(value === '' || value === null ? 0 : parseInt(value));
	const listPresents = $derived(Array.from({ length: numPresents }, (_, i) => i + 1));
</script>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">Number of Presents?</span>
	</div>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs"
		bind:value
	/>
</label>

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
