<script lang="ts">
	import type { Clip } from "$lib/types";

	let {
		clip,
	}: {
		clip: Clip;
	} = $props();
</script>

<div class="clip-card">
	<div class="clip-thumb">
		<span>{clip.emoji}</span>
		<div class="clip-duration">{clip.duration}</div>
	</div>
	<div class="clip-info">
		<div class="clip-title">{clip.title}</div>
		<div class="clip-meta">
			<span>{clip.game}</span>
			<span>{clip.postedAgo}</span>
		</div>
	</div>
</div>

<style>
	.clip-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		overflow: hidden;
		transition: var(--transition);
		position: relative;
	}

	.clip-card:hover {
		transform: translateY(-5px);
		border-color: var(--accent);
	}

	.clip-thumb {
		height: 140px;
		background: #222235;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.clip-thumb span {
		font-size: 2.5rem;
		opacity: 0.8;
	}

	.clip-duration {
		position: absolute;
		bottom: 8px;
		right: 8px;
		background: rgba(0, 0, 0, 0.8);
		color: #fff;
		font-size: 0.75rem;
		padding: 2px 6px;
		border-radius: 4px;
		font-weight: 700;
	}

	.clip-info {
		padding: 0.8rem;
	}

	.clip-title {
		font-weight: 700;
		font-size: 0.95rem;
		margin-bottom: 0.2rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.clip-meta {
		color: var(--text-muted);
		font-size: 0.75rem;
		display: flex;
		justify-content: space-between;
	}
</style>
