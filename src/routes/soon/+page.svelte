<script lang="ts">
	import Avatar from "$cmp/Avatar.svelte";
	import Navbar from "$cmp/Navbar.svelte";
	import SocialLinks from "$cmp/SocialLinks.svelte";
	import Title from "$cmp/Title.svelte";
</script>

<div class="page">
	<Navbar />
	<main>
		<div class="bg-glow"></div>
		<section class="content">
			<Avatar />
			<div class="info">
				<Title />
				<SocialLinks />
			</div>
		</section>
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	main {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rem 1.5rem 4rem;
		position: relative;
	}

	.bg-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 40rem;
		height: 40rem;
		background: radial-gradient(
			circle,
			var(--color-primary-container) 0%,
			var(--color-surface) 70%
		);
		opacity: 0.2;
		border-radius: 9999px;
		filter: blur(6rem);
		pointer-events: none;
	}

	.content {
		max-width: 40rem;
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		position: relative;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
