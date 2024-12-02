<script lang="ts">
	import FlakyComponent from './FlakyComponent.svelte';

	let error = $state<unknown>(null);
	let reset = $state(() => {});

	function onerror(e: unknown, r: () => void) {
		error = e;
		reset = r;
	}
</script>

<svelte:boundary {onerror}><FlakyComponent /></svelte:boundary>

{#if error}
	<button
		class="btn btn-error"
		onclick={() => {
			error = null;
			reset();
		}}
	>
		Oops, Try again!
	</button>
{/if}
