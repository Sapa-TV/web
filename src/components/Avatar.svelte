<div class="avatar-wrapper">
	<div class="avatar-glow"></div>
	<div class="avatar-frame">
		<img alt="Персонаж Sapa TV" src="/avatar.jpg" />
	</div>
</div>

<style>
	.avatar-wrapper {
		position: relative;
		display: inline-block;
	}

	.avatar-glow {
		position: absolute;
		inset: 0;
		background: var(--color-primary-container);
		opacity: 0.1;
		border-radius: 9999px;
		filter: blur(3rem);
		transition: opacity 1s;
	}

	.avatar-wrapper:hover .avatar-glow {
		opacity: 0.2;
	}

	.avatar-frame {
		position: relative;
		background: rgba(255, 255, 255, 0.4);
		padding: 0.5rem;
		border-radius: 1.5rem;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(4px);
		border: 1px solid rgba(255, 255, 255, 0.5);
	}

	.avatar-frame img {
		width: 24rem;
		display: block;
		border-radius: 1.5rem;
	}
</style>