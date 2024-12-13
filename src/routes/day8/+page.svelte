<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { Spring } from 'svelte/motion';

	let svgElement: SVGSVGElement | undefined;

	let elfName = $state('Timsly');
	let lastValidColor = $state('green');
	let elfColor = $state('green');
	let clientWidth = $state(0);
	let clientHeight = $state(0);

	const textOffset = { x: 10, y: -10 };
	let mouseCoords = new Spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 1
		}
	);
	let cursorSize = new Spring(10);

	const colorOptions = ['green', 'red', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown'];
</script>

<h1 class="mb-8 text-5xl">Elf Motion Tracker</h1>
<Input
	label="Elf Name"
	placeholder="Type here"
	bind:value={() => elfName, (v) => (elfName = v.toUpperCase().substring(0, 6))}
/>
<Input
	label="Elf Color"
	placeholder="Type here"
	bind:value={() => elfColor,
	(v) => {
		const validColor = colorOptions.find((c) => c === v);
		if (!!validColor) {
			lastValidColor = validColor;
		}
		elfColor = (colorOptions.find((c) => c === v) ?? lastValidColor).toLowerCase();
	}}
/>
<p>
	Interaction Area: {clientWidth}x{clientHeight}
</p>
<svg
	bind:this={svgElement}
	class="mt-4 h-96 w-full bg-neutral-content"
	bind:clientWidth
	bind:clientHeight
	onmousemove={(e) => {
		mouseCoords.target = {
			x: e.clientX - (svgElement?.getBoundingClientRect().x ?? 0),
			y: e.clientY - (svgElement?.getBoundingClientRect().y ?? 0)
		};
	}}
	role="presentation"
>
	<circle
		fill={elfColor}
		cx={mouseCoords.current.x}
		cy={mouseCoords.current.y}
		r={cursorSize.current}
	>
	</circle>
	<text x={mouseCoords.current.x + textOffset.x} y={mouseCoords.current.y + textOffset.y}
		>{elfName}</text
	>
</svg>
