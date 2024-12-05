<script lang="ts" module>
	export { rollPresent };
</script>

<span>Me outside the snippet</span>

{#snippet rollPresent(luckyNum: number)}
	{#if luckyNum % 2 === 0}
		<div class="w-20">
			<img src="/star.png" alt="Star" />
			<p>Got a Star!</p>
		</div>
	{/if}

	{#if luckyNum % 2 === 1}
		<div class="w-24">
			<img class="bg-red-900" src="/coal.png" alt="Coal" />
			<span>Got coal 😞</span>
		</div>
	{/if}
{/snippet}
