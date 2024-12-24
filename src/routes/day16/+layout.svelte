<script lang="ts">
	import { page } from '$app/state';
</script>

<div>
	<p>{page.url.pathname}</p>
</div>
<slot />
