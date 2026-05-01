<script lang="ts">
	import type { Game } from "$lib/types";

	let {
		game,
	}: {
		game: Game;
	} = $props();
</script>

<div class="game-card">
	<div class="game-icon">{game.emoji}</div>
	<div class="game-info">
		<div class="game-title">{game.title}</div>
		{#if game.progress !== undefined}
			<div class="progress-container">
				<div class="progress-bar">
					<div class="progress-fill" style="width: {game.progress}%"></div>
				</div>
				<span class="progress-text">{game.progress}%</span>
			</div>
		{:else if game.completion}
			<div
				class="completion-badge"
				class:status-platinum={game.completion.includes("Platinum")}
				class:status-gold={game.completion.includes("Gold")}
			>
				{game.completion}
			</div>
		{/if}
	</div>
</div>

<style>
	.game-card {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1rem;
		transition: var(--transition);
	}

	.game-card:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: var(--primary);
	}

	.game-icon {
		width: 60px;
		height: 60px;
		background: #1e1e2f;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.game-info {
		flex-grow: 1;
	}

	.game-title {
		font-weight: 700;
	}

	.progress-container {
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.progress-bar {
		flex-grow: 1;
		height: 6px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 3px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: var(--accent);
		border-radius: 3px;
	}

	.progress-text {
		font-size: 0.75rem;
		color: var(--accent);
	}

	.completion-badge {
		margin-top: 0.5rem;
		font-size: 0.7rem;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-weight: 800;
		display: inline-block;
	}

	.status-platinum {
		background: linear-gradient(45deg, #ffd700, #daa520);
		color: #000;
	}

	.status-gold {
		background: #daa520;
		color: #000;
	}

	@media (max-width: 768px) {
		.game-card {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.game-icon {
			width: 100%;
			height: 100px;
		}
	}
</style>
