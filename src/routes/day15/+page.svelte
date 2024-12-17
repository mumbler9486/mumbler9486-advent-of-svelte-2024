<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	let inputText = $state('Dinosaur');

	let level1 = $state('');
	let level2 = $derived(`🎄${level1}🎄`);
	let level3 = $state('');

	$effect(() => {
		$inspect.trace('surrounder level 1');
		level1 = `🎁${inputText}🎁`;
	});

	$effect(() => {
		$inspect.trace('surrounder level 3');
		level3 = `🎅${level2}🤶`;
	});
</script>

<h1 class="mb-8 text-5xl">🎁Present Surrounder🎁</h1>
<p class="mb-8">Input something into the text and see the $inspect rune work in console</p>
<div class="flex flex-col gap-4">
	<Input label="The Text" placeholder="Type here" bind:value={inputText} />
	<div class="text-xl">Level 1: {level1}</div>
	<div class="text-xl">Level 2: {level2}</div>
	<div class="text-xl">Level 3: {level3}</div>
</div>
