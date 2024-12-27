<script lang="ts">
	import { fly } from 'svelte/transition';

	const rotations = [
		'rotate-0',
		'rotate-45',
		'rotate-90',
		'rotate-135',
		'rotate-180',
		'rotate-225',
		'rotate-270',
		'rotate-315'
	];

	const cardFronts = ['star.png', 'coal.png', 'present.png', 'wreath.png', 'mistletoe.png'];

	let gameWin = $state(false);
	let cards = $state(
		Array(5)
			.fill(0)
			.map((_, i) => {
				const rotationIndex = Math.floor(Math.random() * rotations.length);
				return {
					index: i,
					flipped: false,
					rotationClass: rotations[rotationIndex],
					rotationIndex: rotationIndex,
					frontSrc: cardFronts[i]
				};
			})
	);

	const clickButton = (btnIndex: number) => {
		if (!cards[btnIndex].flipped) {
			cards[btnIndex].flipped = true;
			checkWin();
			return;
		}
		cards[btnIndex].rotationIndex = (cards[btnIndex].rotationIndex + 1) % rotations.length;
		cards[btnIndex].rotationClass = rotations[cards[btnIndex].rotationIndex];

		checkWin();
	};

	const checkWin = () => {
		const isWin = cards.every((card) => card.rotationIndex === 0);
		gameWin = isWin;
	};
</script>

<h1 class="mb-8 text-5xl">CLSX Demo</h1>
<p class="mb-4">
	The underlying mechanism to rotate the cards uses CLSX. Combined constant classes, conditional
	classes, and string properties as class values.
</p>
<p>Rotate the cards until they are upright.</p>
<div class="flex flex-col items-center">
	{#if gameWin}
		<h1 transition:fly={{ duration: 1000 }} class="text-5xl">You Win! Merry Christmas!</h1>
	{/if}
	<div class="mt-8 flex flex-wrap gap-24 p-16">
		{#each cards as card, i}
			<div class="flex flex-col gap-2">
				<div>
					<img
						class={['w-48', 'select-none', { 'hide-card': card.flipped }]}
						src="christmas-card-back.png"
						alt="Back of Card"
					/>
				</div>
				<div class={['relative', 'flex', 'justify-center', card.rotationClass]}>
					<img
						class={['w-28', 'absolute', 'top-[20%]', 'select-none', { 'hide-card': !card.flipped }]}
						src={card.frontSrc}
						alt="Front of Card"
					/>
					<img
						class={['w-48', 'z-10', 'select-none', { 'hide-card': !card.flipped }]}
						src="christmas-card-blank.png"
						alt="Blank Card"
					/>
				</div>
				<button
					class={['btn', 'btn-primary', 'mt-12', { 'pointer-events-none': gameWin }]}
					disabled={gameWin}
					onclick={() => clickButton(i)}>{!card.flipped ? 'Reveal' : 'Rotate'}</button
				>
			</div>
		{/each}
	</div>
</div>

<style scoped>
	.hide-card {
		display: none;
	}

	.rotate-0 {
		transform: rotate(0deg);
	}
	.rotate-45 {
		transform: rotate(45deg);
	}
	.rotate-90 {
		transform: rotate(90deg);
	}
	.rotate-135 {
		transform: rotate(135deg);
	}
	.rotate-180 {
		transform: rotate(180deg);
	}
	.rotate-225 {
		transform: rotate(225deg);
	}
	.rotate-270 {
		transform: rotate(270deg);
	}
	.rotate-315 {
		transform: rotate(315deg);
	}
</style>
