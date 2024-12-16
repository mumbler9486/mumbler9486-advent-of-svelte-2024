<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
</script>

<img
	in:fly|global={{ y: 500, easing: elasticOut, duration: 800 }}
	out:scale
	class="w-96"
	src="/mistletoe.png"
	alt="Mistletoe"
/>
