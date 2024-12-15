import { prepareMagicNumber } from '$lib/stores/magicNumber.svelte';

/** @type {import('@sveltejs/kit').ClientInit} */
export async function init() {
	await prepareMagicNumber();
}
