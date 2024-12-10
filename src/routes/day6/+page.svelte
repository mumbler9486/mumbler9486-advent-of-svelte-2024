<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import { Spring } from 'svelte/motion';

	let svgElement: SVGSVGElement | undefined;

	let elfPower = $state(0);

	let elfPowerTween = new Tween(0, {
		duration: 500,
		easing: cubicOut
	});

	$effect(() => {
		mouseCoords.stiffness = elfPower === 0 ? 0.01 : elfPower / 100;
		elfPowerTween.target = elfPower;
	});

	let mouseCoords = new Spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 1
		}
	);
	let cursorSize = new Spring(10);
</script>

<div>
	<h1 class="text-5xl font-bold">ELF POWER</h1>
	<progress class="progress progress-warning my-8" value={elfPower} max="100"></progress>
	<button class="btn btn-primary" onclick={() => (elfPower = 0)}>0%</button>
	<button class="btn btn-primary" onclick={() => (elfPower = 25)}>25%</button>
	<button class="btn btn-primary" onclick={() => (elfPower = 50)}>50%</button>
	<button class="btn btn-primary" onclick={() => (elfPower = 75)}>75%</button>
	<button class="btn btn-primary" onclick={() => (elfPower = 100)}>100%</button>
</div>
<svg
	bind:this={svgElement}
	class="mt-4 h-96 w-full bg-neutral-content"
	onmousemove={(e) => {
		mouseCoords.target = {
			x: e.clientX - (svgElement?.getBoundingClientRect().x ?? 0),
			y: e.clientY - (svgElement?.getBoundingClientRect().y ?? 0)
		};
	}}
	onmousedown={() => (cursorSize.target = 30)}
	onmouseup={() => (cursorSize.target = 10)}
	role="presentation"
>
	<circle fill="green" cx={mouseCoords.current.x} cy={mouseCoords.current.y} r={cursorSize.current}
	></circle>
</svg>
