<script>
	let mouse = $state({ x: 0, y: 0 });
	let success = $state(false);
</script>

<svelte:window
	onmousemove={(e) => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}}
/>

<p class="hidden">{mouse.x}x{mouse.y}</p>

<button
	class="btn btn-primary"
	class:hidden={success}
	onclick={() => {
		if (Math.random() > 0.2) {
			mouse = null;
		} else {
			success = true;
		}
	}}>Be naughty?</button
>

{#if success}
	<h1 class="text-5xl font-bold text-green-500">Success!</h1>
{/if}
