<script lang="ts">
	import type { Game } from "$lib/types";
	import GameCard from "./GameCard.svelte";

	let {
		title,
		games,
	}: {
		title: string;
		games: Game[];
	} = $props();
</script>

<div class="subsection">
	<h3 class="subsection-title">{title}</h3>
	<div class="game-list">
		{#each games as game (game.id)}
			<GameCard {game} />
		{/each}
	</div>
</div>

<style>
	.subsection {
		margin-bottom: 4rem;
	}

	.subsection-title {
		font-size: 1.3rem;
		font-weight: 800;
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
		padding-bottom: 0.5rem;
	}

	.game-list {
		display: grid;
		gap: 1rem;
	}
</style>
