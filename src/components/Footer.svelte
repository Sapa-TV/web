<script lang="ts">
	const footerLinks = [
		{ label: "Правила", href: "#" },
		{ label: "Донат", href: "#" },
	];
</script>

<footer>
	<div class="container">
		<div class="footer-links">
			{#each footerLinks as link (link.label)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</div>
		<p>© 2026 Neko Shinobi Sanctuary 💖</p>
	</div>
</footer>

<style>
	footer {
		background: var(--footer-bg);
		padding: 1.5rem 0;
		text-align: center;
		color: var(--text-muted);
		border-top: 1px solid var(--border);
		margin-top: 3rem;
		font-size: 0.85rem;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.footer-links {
		display: flex;
		justify-content: center;
		gap: 1.2rem;
		margin-bottom: 0.8rem;
	}

	.footer-links a {
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: var(--primary);
	}
</style>
