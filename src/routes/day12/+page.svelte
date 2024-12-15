<script lang="ts">
	// See "day 12" in the network tab and find the code "kit.start(app, element, {"
	// Data will loaded from that point
	let { data } = $props();
</script>

<h1 class="text-5xl">North Pole Coordinated Datetime</h1>
<p>Raw time {data.nowUtc.raw}</p>
<p>Your time {data.nowUtc.date.toLocaleString()}</p>
