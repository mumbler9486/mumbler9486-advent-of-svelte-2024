<script lang="ts">
	import { on } from 'svelte/events';
	import { prefersReducedMotion } from 'svelte/motion';
	import { createSubscriber, MediaQuery } from 'svelte/reactivity';

	let imgElement: HTMLImageElement | undefined;

	const treeImgSrc = '/tree.png';
	const presentImgSrc = '/present.png';

	const large = new MediaQuery('min-width: 800px');

	let currentWidth = $state(0);

	const subscribe = createSubscriber((update) => {
		const queryElement = window.matchMedia(`(min-width: 800px)`);
		const off = on(queryElement, 'change', update);
		return () => off();
	});

	$effect(() => {
		subscribe();
		currentWidth = imgElement?.width ?? 0; // Kinda finnicky because the media query fires an event once on resize
	});
</script>

<p>Resize your window to see the effect! Uses Media Queries.</p>
<p class="text-primary">Current Size: {large.current ? 'Large screen' : 'Small screen'}</p>
<p class="text-primary">Image size: {currentWidth}px</p>
<p class="text-primary">Prefers Reduced Motion? {prefersReducedMotion.current ? 'Yes' : 'No'}</p>
<div class="flex justify-around">
	<img
		bind:this={imgElement}
		class="max-w-xl object-fill"
		src={large.current ? treeImgSrc : presentImgSrc}
		alt="Content"
	/>
</div>
