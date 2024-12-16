<script lang="ts">
	import { mount, unmount } from 'svelte';
	import Mistletoe from './Mistletoe.svelte';
	import Wreath from './Wreath.svelte';

	let mode = $state('mistletoe');
	let loading = $state(false);

	let target: HTMLElement | null;
	let component: unknown | null;

	const switchMode = async () => {
		if (!target) {
			return;
		}
		loading = true;

		mode = mode === 'mistletoe' ? 'wreath' : 'mistletoe';

		if (!!component) {
			await unmount(component, { outro: true });
			component = null;
		}

		const nextComponent = mode === 'mistletoe' ? Mistletoe : Wreath;
		component = mount(nextComponent, { target });

		loading = false;
	};
</script>

<button disabled={loading} class="btn btn-primary" onclick={switchMode}
	>{mode === 'mistletoe' ? 'Switch to wreath' : 'Switch to mistletoe'}</button
>

<div class="select-none" bind:this={target}></div>
