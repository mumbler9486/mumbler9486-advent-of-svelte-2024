<!-- Intended for https://svelte.dev/playground -->
<svelte:options runes />

<script>
	let name = 'world';
	let bellHistory = $state([]);

	const timestampJingle = () => {
		bellHistory.push(new Date());
	};
</script>

<div>
	<button class="bell-button" onclick={timestampJingle}>Rock Some Bells</button>
</div>

<h1>🔔🦌Jingle Bells Rocked🎄📝</h1>
<div class="no-bullets">
	{#each bellHistory as timestamp}
		<li>🔔 {timestamp.toLocaleString()}</li>
	{/each}
</div>

<style>
	.no-bullets {
		list-style: none;
	}

	.bell-button {
		padding: 1rem;
		border-width: 1px;
		border-radius: 0.5rem;
		background-color: yellowgreen;
		font-weight: 600;
		font-size: 0.875rem;
	}
</style>
