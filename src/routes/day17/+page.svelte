<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	interface TodoItem {
		bullet: string;
		text: string;
	}

	let listBullet = $state('❄');
	let todoList = $state([] as TodoItem[]);
	let listInput = $state('');

	let todoInput: Input | undefined;

	const bulletIcons = ['❄', '⛄', '🌨', '🎅', '🎄', '🎁', '🤶', '🧝‍♀️', '🦌'];

	let addToList = () => {
		const input = listInput.trim();
		if (input === '') return;

		todoList.push({
			bullet: listBullet,
			text: input
		});
		listInput = '';
		todoInput?.focus();
		console.log(listBullet);
	};
</script>

<div class="flex items-end gap-4">
	<Input
		bind:this={todoInput}
		label="Add Todo List item"
		placeholder="Type here"
		bind:value={listInput}
		on:keyup={(e) => e.key === 'Enter' && addToList()}
	/>
	<button class="btn btn-primary" onclick={addToList}>Add</button>
	<label class="form-control max-w-xs max-w-xs">
		<div class="label">
			<span class="label-text">List Bullet</span>
		</div>
		<select class="select select-bordered" bind:value={listBullet}>
			<option disabled selected>Pick one</option>
			{#each bulletIcons as icon}
				<option value={icon}>{icon}</option>
			{/each}
		</select>
	</label>
</div>

{#snippet listItem(listBulletIcon: string, itemText: string)}
	<li>{listBulletIcon} {itemText}</li>
{/snippet}

<div class="list-none pl-4">
	{#each todoList as todo}
		{@render listItem(todo.bullet, todo.text)}
	{/each}
</div>
