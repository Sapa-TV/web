<script lang="ts">
	let {
		emoji = "🐱",
		size = 300,
	}: {
		emoji?: string;
		size?: number;
	} = $props();
</script>

<div class="about-avatar" style="max-width: {size}px; aspect-ratio: 1/1;">
	<span>{emoji}</span>
</div>

<style>
	.about-avatar {
		width: 100%;
		aspect-ratio: 1/1;
		background: linear-gradient(135deg, #2d1b4e, #16213e);
		border-radius: 30px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 5rem;
		border: 2px solid var(--primary);
		box-shadow: 0 0 30px var(--primary-glow);
	}
</style>
