<script lang="ts">
	let {
		emoji = "🌸",
		size = 140,
	}: {
		emoji?: string;
		size?: number;
	} = $props();
</script>

<div class="gallery-item" style="height: {size}px">
	<span>{emoji}</span>
	<div class="hover-overlay">🔍</div>
</div>

<style>
	.gallery-item {
		background: #1e1e2f;
		border-radius: 12px;
		border: 1px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		transition: var(--transition);
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.gallery-item:hover {
		border-color: var(--primary);
		transform: scale(1.05);
	}

	.gallery-item span {
		opacity: 0.8;
	}

	.hover-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		opacity: 0;
		transition: var(--transition);
	}

	.gallery-item:hover .hover-overlay {
		opacity: 1;
	}
</style>
