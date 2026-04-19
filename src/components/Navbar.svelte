<script lang="ts">
	import NotifyButton from "./NotifyButton.svelte";
</script>

<nav class="navbar">
	<div class="navbar-inner">
		<div class="logo">Sapa TV - скоро</div>
		<NotifyButton />
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		background: var(--glass);
		backdrop-filter: blur(20px);
		padding: 1.5rem 2rem;
	}

	.navbar-inner {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-family: var(--font-headline);
		font-size: 1.5rem;
		font-weight: 900;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}
</style>
