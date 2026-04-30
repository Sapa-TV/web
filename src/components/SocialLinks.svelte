<script lang="ts">
	import Twitch from "~icons/simple-icons/twitch";
	import Vk from "~icons/simple-icons/vk";
	import Youtube from "~icons/simple-icons/youtube";
</script>

<div class="links">
	<a
		class="link link_twitch"
		href="https://www.twitch.tv/sapushka_"
		target="_blank"
		rel="noopener noreferrer"
	>
		<Twitch />
		Смотреть на Twitch
	</a>
	<a
		class="link link_vk"
		href="https://live.vkvideo.ru/sapushka_"
		target="_blank"
		rel="noopener noreferrer"
	>
		<Vk />
		VK Видео Live
	</a>
	<a
		class="link link_youtube"
		href="https://www.youtube.com/@sapa_sapushka"
		target="_blank"
		rel="noopener noreferrer"
	>
		<Youtube />
		YouTube
	</a>
</div>

<style>
	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
		max-width: 20rem;
		margin: 0 auto;
	}

	.link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		border-radius: 9999px;
		font-weight: 700;
		font-size: 1rem;
		text-decoration: none;
		color: white;
		width: 100%;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.1s,
			filter 0.2s;
	}

	.link:hover {
		filter: brightness(1.1);
	}

	.link:active {
		transform: scale(0.95);
	}

	.link :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
		fill: white;
	}

	.link_twitch {
		background: var(--color-twitch);
	}
	.link_twitch:hover {
		background: #772ce8;
	}

	.link_vk {
		background: var(--color-vk);
	}
	.link_vk:hover {
		background: #0066dd;
	}

	.link_youtube {
		background: var(--color-youtube);
	}
	.link_youtube:hover {
		background: #cc0000;
	}
</style>
