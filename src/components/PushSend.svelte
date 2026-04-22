<script lang="ts">
	import { browser } from "$app/environment";
	import { api } from "$lib/api";

	let title = $state("Test");
	let body = $state("");
	let sending = $state(false);
	let errorMessage = $state<string | null>(null);
	let sentCount = $state<number | null>(null);

	async function handleSend() {
		if (!browser || !body.trim()) return;

		sending = true;
		errorMessage = null;
		sentCount = null;

		const result = await api.testPushAll({
			title,
			body,
		});

		sending = false;

		if (result.isErr()) {
			errorMessage = result.error.message;
			return;
		}

		sentCount = result.value.sent;
		body = "";
	}
</script>

<div class="push-form">
	<input
		type="text"
		bind:value={title}
		placeholder="Title"
		class="push-input"
	/>
	<input
		type="text"
		bind:value={body}
		placeholder="Message"
		class="push-input"
	/>
	<button
		class="push-btn"
		onclick={handleSend}
		disabled={sending || !body.trim()}
	>
		{#if sending}
			<span class="spinner"></span>
			Отправка...
		{:else}
			Отправить
		{/if}
	</button>
	{#if sentCount !== null}
		<span class="success">Отправлено: {sentCount}</span>
	{/if}
</div>

{#if errorMessage}
	<p class="error">{errorMessage}</p>
{/if}

<style>
	.push-form {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.push-input {
		padding: 0.5rem 0.75rem;
		border: 1px solid #d1d5db;
		border-radius: 0.5rem;
		font-size: 0.875rem;
	}

	.push-input:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.push-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 0.875rem;
		color: white;
		background: var(--color-primary);
		border: none;
		cursor: pointer;
	}

	.push-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.spinner {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top-color: white;
		border-radius: 50%;
		animation: spin 0.6s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.error {
		font-size: 0.875rem;
		color: #ef4444;
	}

	.success {
		font-size: 0.875rem;
		color: #22c55e;
		margin-left: 0.5rem;
	}
</style>
