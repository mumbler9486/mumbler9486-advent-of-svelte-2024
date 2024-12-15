<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	const textSize = 24;
	const textOffset = { x: 10, y: 25 };

	let presentDestination = $state({
		destination: 'Boston, MA'
	});
</script>

<h1 class="mb-8 text-5xl">Cheapestly Coded Present Labeller</h1>
<p>
	See console for warnings/errors and notifications for sent with links to documentation if issue.
</p>
<Input label="To" placeholder="Type here" bind:value={presentDestination.destination} />
<button
	class="btn btn-primary mt-4"
	onclick={() => {
		console.log(presentDestination);
	}}>Generate Present</button
>
<svg class="mt-4 h-96 w-full bg-neutral-content" role="presentation">
	<text font-size={textSize} x={textOffset.x} y={textOffset.y}
		>To: {presentDestination.destination}</text
	>
	<text font-size={textSize} x={textOffset.x} y={textOffset.y + textSize}>From: The North Pole</text
	>
	<text font-size={textSize} x={textOffset.x} y={textOffset.y + textSize * 3}
		>Deliver By December 25, 2024 🎁</text
	>
</svg>
