<script lang="ts">
	import type { Clip } from "$lib/types";
	import ClipCard from "./ClipCard.svelte";

	let {
		clips,
		viewAllUrl = "#",
	}: {
		clips: Clip[];
		viewAllUrl?: string;
	} = $props();
</script>

<div class="subsection">
	<div class="subsection-header">
		<div class="subsection-title">✂️ Последние нарезки</div>
		<a href={viewAllUrl} class="view-all">Все клипы →</a>
	</div>
	<div class="clips-grid">
		{#each clips as clip (clip.id)}
			<ClipCard {clip} />
		{/each}
	</div>
</div>

<style>
	.subsection {
		margin-bottom: 4rem;
	}

	.subsection-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
		padding-bottom: 0.5rem;
	}

	.subsection-title {
		font-size: 1.3rem;
		font-weight: 800;
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.view-all {
		color: var(--accent);
		font-size: 0.85rem;
		font-weight: 700;
		text-decoration: none;
	}

	.clips-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	@media (max-width: 768px) {
		.clips-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
