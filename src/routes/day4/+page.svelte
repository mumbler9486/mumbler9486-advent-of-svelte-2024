<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	let item: string = $state('');
	let to: string = $state('');
	let from: string = $state('');

	interface Present {
		id: number;
		to: string;
		from: string;
		item: string;
	}

	const presents = $state<Present[]>([]);

	const generatePresent = () => {
		if (stringNullOrEmpty(item) || stringNullOrEmpty(to) || stringNullOrEmpty(from)) return;

		presents.push({
			id: presents.length,
			to: to,
			from: from,
			item: item
		});
	};

	const stringNullOrEmpty = (str: string) => str == '' || str == null;
</script>

<form>
	<div class="flex max-w-3xl flex-col content-between gap-4">
		<Input label="Item" placeholder="Type here" defaultValue="Toy" bind:value={item} required />
		<Input label="To whom?" placeholder="Type here" defaultValue="Noel" bind:value={to} required />
		<Input
			label="From whom?"
			placeholder="Type here"
			defaultValue="Jimmy"
			bind:value={from}
			required
		/>
		<input class="btn btn-secondary" type="reset" value="Reset" />
		<button class="btn btn-primary" type="submit" onclick={generatePresent}>Submit</button>
	</div>
</form>

<div class="gap 4 flex flex-wrap">
	{#each presents as present}
		<div>
			<img class="w-30" src="/present.png" alt="Present Icon" />
			{present.from} gave {present.to} a {present.item}
		</div>
	{/each}
</div>
