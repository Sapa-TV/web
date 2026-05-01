<script lang="ts">
	import { page } from "$app/stores";
	import ThemeToggle from "./ThemeToggle.svelte";

	const navItems = [
		{ label: "Главная", href: "/" },
		{ label: "Игры", href: "/games" },
		{ label: "Обо мне", href: "/about" },
		{ label: "Галерея", href: "/gallery" },
		{ label: "Связь", href: "/contact" },
	];

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header>
	<div class="container">
		<a href="/" class="logo" onclick={closeMenu}>🐱 NEKO.SAPA</a>
		<div class="nav-right">
			<nav class="nav-menu" class:active={menuOpen}>
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						class="nav-link"
						class:active={$page.url.pathname === item.href}
						onclick={closeMenu}
					>
						{item.label}
					</a>
				{/each}
			</nav>
			<ThemeToggle />
			<button class="mobile-toggle" onclick={toggleMenu} aria-label="Меню">
				{menuOpen ? "✕" : "☰"}
			</button>
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
		background: var(--header-bg);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
		height: var(--nav-height, 64px);
		display: flex;
		align-items: center;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.logo {
		font-family: "Bungee Shade", cursive;
		font-size: 1.3rem;
		color: var(--accent);
		text-decoration: none;
		text-shadow: 0 0 10px var(--accent-glow);
	}

	.nav-menu {
		list-style: none;
		display: flex;
		gap: 1.5rem;
	}

	.nav-link {
		color: var(--text-muted);
		text-decoration: none;
		font-weight: 700;
		font-size: 0.9rem;
		padding: 0.5rem 0;
		position: relative;
		transition: color 0.2s;
		cursor: pointer;
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--text);
	}

	.nav-link::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--primary);
		transition: width 0.2s;
	}

	.nav-link.active::after,
	.nav-link:hover::after {
		width: 100%;
	}

	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--text);
		font-size: 1.5rem;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.nav-menu {
			position: fixed;
			top: var(--nav-height, 64px);
			left: 0;
			width: 100%;
			background: var(--header-bg);
			flex-direction: column;
			padding: 1.5rem;
			gap: 1rem;
			transform: translateY(-100%);
			opacity: 0;
			transition:
				transform 0.3s,
				opacity 0.3s;
			pointer-events: none;
			backdrop-filter: blur(10px);
			z-index: 99;
		}

		.nav-menu.active {
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		}

		.mobile-toggle {
			display: block;
		}
	}
</style>
