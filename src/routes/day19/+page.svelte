<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="">
	<p>Bundle Strategies in Svelte. Configure in <code>svelte.config.js</code></p>
	<li>
		<code>split</code> - App will be split up in multiple .js and .css files. Files are lazy loaded as
		the user navigates the app. This is the default.
	</li>
	<li>
		<code>single</code> - Creates one .js bundle and one .css bundle for the entire application.
	</li>
	<li>
		<code>inline</code> - Inlines all .js and .css files in the HTML. The result can be usable without
		a server.
	</li>
	<a class="link mt-8" target="_blank" href="https://svelte.dev/docs/kit/configuration#output"
		>Svelte Docs (Configuration &gt; Output &gt; Bundle Strategy)</a
	>
</div>

<div class="mt-8 text-accent">
	<p>Currently using bundle strategy: <code>{data.bundleStrategy}</code></p>
</div>
