<script lang="ts">
	type Player = '❄️' | '🎄';
	type BoardCell = Player | null;

	let board: BoardCell[] = Array(9).fill(null);
	let currentPlayer: Player = '❄️';
	let winner: Player | null = null;
	let gameOver: boolean = false;
	let winningCombination: number[] = [];

	const winningCombos: number[][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Rows
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Columns
		[0, 4, 8],
		[2, 4, 6] // Diagonals
	];

	function handleCellClick(index: number): void {
		if (board[index] || winner) return;

		board[index] = currentPlayer;
		checkWinner();

		if (!winner) {
			currentPlayer = currentPlayer === '❄️' ? '🎄' : '❄️';

			// Simple AI for the computer player
			if (!winner && board.filter((cell) => cell === null).length > 0) {
				setTimeout(computerMove, 500);
			}
		}
	}

	function computerMove(): void {
		const emptyCells: number[] = board.reduce(
			(acc: number[], cell, index) => (cell === null ? [...acc, index] : acc),
			[]
		);

		if (emptyCells.length > 0) {
			const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
			board[randomIndex] = currentPlayer;
			checkWinner();
			currentPlayer = currentPlayer === '❄️' ? '🎄' : '❄️';
		}
	}

	function checkWinner(): void {
		for (let combo of winningCombos) {
			const [a, b, c] = combo;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				winner = board[a] as Player;
				winningCombination = combo;
				gameOver = true;
				return;
			}
		}

		// Check for draw
		if (board.every((cell) => cell !== null)) {
			gameOver = true;
		}
	}

	function resetGame(): void {
		board = Array(9).fill(null);
		currentPlayer = '❄️';
		winner = null;
		gameOver = false;
		winningCombination = [];
	}
</script>

<p class="max-w-3xl">
	This page, except for this preamble text, was written by Claude Sonnet 3.5. I didn't manage to
	give it svelte's llms.txt file but it understood the assignment. It even told me to provide audio
	but I asked it to amend to not add any. I also had it revise to rewrite the code to use TypeScipt.
	Overall seems to have done a great job.
</p>

<div class="christmas-tic-tac-toe">
	<h1>🎄 Christmas Tic Tac Toe 🎅</h1>

	{#if winner}
		<div class="winner-message">
			{winner === '❄️' ? 'Snowflake' : 'Christmas Tree'} wins! 🎉
		</div>
	{:else if gameOver}
		<div class="draw-message">It's a draw! ❄️🎄</div>
	{:else}
		<div class="current-player">
			Current Player: {currentPlayer === '❄️' ? 'Snowflake ❄️' : 'Christmas Tree 🎄'}
		</div>
	{/if}

	<div class="board">
		{#each board as cell, index}
			<button
				class="cell"
				class:winner={winningCombination.includes(index)}
				on:click={() => handleCellClick(index)}
			>
				{cell || ''}
			</button>
		{/each}
	</div>

	{#if gameOver}
		<button class="reset-btn" on:click={resetGame}> Play Again! 🎄 </button>
	{/if}
</div>

<style>
	.christmas-tic-tac-toe {
		font-family: 'Arial', sans-serif;
		text-align: center;
		background-color: #e6f2ff;
		padding: 20px;
		border-radius: 10px;
		max-width: 400px;
		margin: 0 auto;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #d32f2f;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	.board {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		margin: 20px 0;
	}

	.cell {
		background-color: #ffffff;
		border: 2px solid #4caf50;
		border-radius: 10px;
		font-size: 3rem;
		height: 100px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.cell:hover {
		background-color: #f0f0f0;
		transform: scale(1.05);
	}

	.cell.winner {
		background-color: #ffd700;
		animation: pulse 1s infinite;
	}

	.reset-btn {
		background-color: #d32f2f;
		color: white;
		border: none;
		padding: 10px 20px;
		font-size: 1rem;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.reset-btn:hover {
		background-color: #b71c1c;
	}

	.winner-message,
	.draw-message,
	.current-player {
		margin: 15px 0;
		font-size: 1.2rem;
		font-weight: bold;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
