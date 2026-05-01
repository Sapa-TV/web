<script lang="ts">
	import ClipsGrid from "$cmp/ClipsGrid.svelte";
	import GalleryGrid from "$cmp/GalleryGrid.svelte";
	import StreamPlayer from "$cmp/StreamPlayer.svelte";
	import SubsectionHeader from "$cmp/SubsectionHeader.svelte";
	import type { Clip, GalleryItem } from "$lib/types";

	const clips: Clip[] = [
		{
			id: "1",
			title: "No Hit Malenia Run",
			game: "Elden Ring",
			duration: "0:45",
			emoji: "⚔️",
			postedAgo: "2д",
		},
		{
			id: "2",
			title: "Реакция на скример",
			game: "Horror",
			duration: "1:20",
			emoji: "😱",
			postedAgo: "5д",
		},
		{
			id: "3",
			title: "Фейл на спидране",
			game: "Sekiro",
			duration: "0:30",
			emoji: "🤣",
			postedAgo: "1н",
		},
	];

	const galleryPreviewSize = 140;

	const galleryItems: GalleryItem[] = [
		{ id: "1", emoji: "🌸" },
		{ id: "2", emoji: "🏯" },
		{ id: "3", emoji: "⚔️" },
		{ id: "4", emoji: "🍥" },
	];
</script>

<div class="hero-banner">
	<h1>Neko Shinobi <span class="highlight">Sanctuary</span></h1>
	<p>Уютный стриминг, хардкорные боссы и котики 🐾</p>
</div>

<div class="subsection">
	<StreamPlayer />
	<div class="stream-action">
		<a href="https://twitch.tv" target="_blank" rel="noopener" class="btn btn-primary">
			▶️ Открыть на Twitch
		</a>
	</div>
</div>

<ClipsGrid {clips} />

<div class="subsection">
	<SubsectionHeader title="🎨 Арт" viewAllUrl="/gallery" />
	<GalleryGrid items={galleryItems} itemSize={galleryPreviewSize} />
</div>

<style>
	.hero-banner {
		text-align: center;
		margin-bottom: 2rem;
	}

	.hero-banner h1 {
		font-family: "Bungee Shade", cursive;
		font-size: clamp(1.5rem, 4vw, 2.2rem);
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}

	.highlight {
		color: var(--primary);
	}

	.hero-banner p {
		color: var(--text-muted);
		font-size: 1rem;
	}

	.stream-action {
		text-align: center;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-weight: 800;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.2s ease;
		border: none;
		font-size: 0.8rem;
	}

	.btn-primary {
		background: var(--primary);
		color: #fff;
		box-shadow: 0 4px 12px var(--primary-glow);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px var(--primary-glow);
	}
</style>