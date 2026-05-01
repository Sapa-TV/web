<script lang="ts">
	let {
		title,
		highlight,
	}: {
		title: string;
		highlight?: string;
	} = $props();
</script>

<h2 class="section-title">
	{title}
	{#if highlight}<span>{highlight}</span>{/if}
</h2>

<style>
	.section-title {
		font-family: "Bungee Shade", cursive;
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
		text-align: center;
		color: var(--text);
		letter-spacing: -0.5px;
	}

	.section-title :global(span) {
		color: var(--primary);
	}
</style>
