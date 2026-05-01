<script lang="ts">
	import LiveBadge from "./LiveBadge.svelte";

	let {
		streamTitle = "Elden Ring DLC",
		viewers = "1.2k",
	}: {
		streamTitle?: string;
		viewers?: string;
	} = $props();
</script>

<div class="stream-container">
	<div class="stream-top-bar">
		<div class="stream-info">
			<LiveBadge />
			<span class="stream-title">{streamTitle}</span>
		</div>
		<div class="stream-viewers">👁️ {viewers}</div>
	</div>
	<div class="stream-embed">
		<div class="play-btn-circle"></div>
	</div>
</div>

<style>
	.stream-container {
		max-width: 750px;
		margin: 0 auto 1.5rem auto;
		background: var(--bg-panel);
		border: 1px solid var(--border);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: var(--shadow);
	}

	.stream-top-bar {
		padding: 0.6rem 1rem;
		background: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--border);
	}

	:global([data-theme="light"]) .stream-top-bar {
		background: #f3f4f6;
	}

	.stream-info {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.stream-title {
		font-weight: 700;
		font-size: 0.85rem;
	}

	.stream-viewers {
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	.stream-embed {
		aspect-ratio: 16/9;
		background: #12121c;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		position: relative;
	}

	.play-btn-circle {
		width: 60px;
		height: 60px;
		background: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s;
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.play-btn-circle:hover {
		transform: scale(1.1);
		background: var(--primary);
	}

	.play-btn-circle::after {
		content: "";
		width: 0;
		height: 0;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 18px solid #fff;
		margin-left: 3px;
	}
</style>
