<script lang="ts">
</script>

<h1 class="mb-8 text-5xl">Single File HTML Page - Fortune Teller Demo 🔮</h1>
<div class="flex max-w-3xl flex-col gap-4">
	<p>
		Follow up on the <code>bundleStrategy</code> option and the <code>hash-based routing</code> from
		day 19 and day 21 respectively, it is possible to create fully self-contained apps. Use the
		<code>bundleStrategy: 'inline' </code> option and adjust Vite’s <code>assetsInlineLimit</code> option.
	</p>

	<p>
		Made the demo using Claude.ai (Sonnet 3.5). I pasted the code into svelte playground to get a
		basic application project quickly. Then modified the configuration to output the single HTML. I
		then added a simple link to test the hash based routing and a sound effect to check the inline
		assets.
	</p>
	<p>
		For the project, the final HTML file, or more information you can find the source code on
		GitHub:
	</p>
	<p>
		<a
			class="btn btn-primary mt-4"
			target="_blank"
			href="https://github.com/mumbler9486/advent-of-svelte-day22-single-file-html/tree/main"
			>Source Code (GitHub)</a
		>
	</p>
	<p>
		<a
			class="btn btn-secondary mt-4"
			target="_blank"
			href="https://mumbler9486.github.io/advent-of-svelte-day22-single-file-html/">Live Demo</a
		>
	</p>
	<p>
		<a
			class="btn btn-accent mt-4"
			target="_blank"
			href="https://github.com/mumbler9486/advent-of-svelte-day22-single-file-html/releases"
			>Releases (GitHub)</a
		>
	</p>
</div>
