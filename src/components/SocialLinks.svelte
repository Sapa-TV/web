<div class="links">
	<a class="link link_twitch" href="https://www.twitch.tv/sapushka_" target="_blank" rel="noopener noreferrer">
		<svg viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
		Смотреть на Twitch
	</a>
	<a class="link link_vk" href="https://live.vkvideo.ru/sapushka_" target="_blank" rel="noopener noreferrer">
		<svg viewBox="0 0 24 24"><path d="M15.684 2H8.316C2.504 2 2 2.504 2 8.316v7.368C2 21.496 2.504 22 8.316 22h7.368C21.496 22 22 21.496 22 15.684V8.316C22 2.504 21.496 2 15.684 2zm3.268 12.292h-1.682c-.636 0-.832-.508-1.976-1.668-1.004-.988-1.444-1.124-1.692-1.124-.348 0-.448.1-.448.58v1.524c0 .416-.132.664-1.216.664-1.792 0-3.784-1.084-5.172-3.108C4.664 8.664 4.216 7.1 4.216 6.684c0-.248.1-.48.58-.48h1.682c.44 0 .604.184.772.632.848 2.46 2.26 4.616 2.844 4.616.216 0 .316-.1.316-.648V9.08c-.064-1.044-.612-1.132-.612-1.5 0-.184.152-.364.4-.364h2.648c.368 0 .496.2.496.616v2.512c0 .368.164.496.268.496.216 0 .396-.1.792-.496 1.248-1.396 2.14-3.552 2.14-3.552.12-.248.312-.48.748-.48h1.682c.512 0 .624.264.512.616-.216.984-2.312 3.932-2.312 3.932-.184.296-.248.428 0 .76.184.248.784.76 1.184 1.224.724.808 1.276 1.488 1.424 1.952.164.468-.084.712-.556.712z"/></svg>
		VK Видео Live
	</a>
	<a class="link link_youtube" href="https://www.youtube.com/@sapa_sapushka" target="_blank" rel="noopener noreferrer">
		<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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
		transition: transform 0.1s, filter 0.2s;
	}

	.link:hover {
		filter: brightness(1.1);
	}

	.link:active {
		transform: scale(0.95);
	}

	.link svg {
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