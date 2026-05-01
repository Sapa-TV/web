<script lang="ts">
	let {
		title,
		viewAllUrl,
	}: {
		title: string;
		viewAllUrl?: string;
	} = $props();
</script>

<div class="subsection-header">
	<div class="subsection-title">{title}</div>
	{#if viewAllUrl}
		<a href={viewAllUrl} class="view-all">Открыть галерею →</a>
	{/if}
</div>

<style>
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
</style>
