<script lang="ts">
	let {
		email = "hello@sapa-tv.ru",
		children,
	}: {
		email?: string;
		children?: import("svelte").Snippet;
	} = $props();
</script>

<div class="contact-box">
	{@render children?.()}
	<div class="email-section">
		<a href="mailto:{email}" class="btn btn-outline">📧 {email}</a>
	</div>
</div>

<style>
	.contact-box {
		background: var(--bg-panel);
		border: 1px solid var(--border);
		padding: 3rem;
		border-radius: var(--radius);
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}

	.email-section {
		margin-top: 2rem;
		border-top: 1px solid var(--border);
		padding-top: 2rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.7rem 1.5rem;
		border-radius: 50px;
		font-weight: 800;
		text-decoration: none;
		cursor: pointer;
		transition: var(--transition);
		border: none;
		font-size: 0.95rem;
	}

	.btn-outline {
		background: transparent;
		border: 2px solid var(--accent);
		color: var(--accent);
	}

	.btn-outline:hover {
		background: var(--accent);
		color: var(--bg-dark);
	}
</style>
