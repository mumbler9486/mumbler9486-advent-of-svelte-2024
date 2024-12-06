<script lang="ts">
	export let label: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let defaultValue: string;
	export let required: boolean = false;
</script>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">{label}</span>
	</div>
	<input
		type="text"
		{placeholder}
		class="input input-bordered w-full max-w-xs"
		bind:value
		{defaultValue}
		{required}
	/>
</label>
