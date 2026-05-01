<script lang="ts">
	import { subscribeToPush } from "$lib/notify-subscription";
	import BellIcon from "~icons/lucide/bell";

	let loading = $state(false);
	let errorMessage = $state<string | null>(null);

	async function handleClick() {
		loading = true;
		errorMessage = null;

		const result = await subscribeToPush();
		loading = false;

		if (result.isErr()) {
			errorMessage = result.error;
		}
	}
</script>

<button class="notify-btn" onclick={handleClick} disabled={loading}>
	{#if loading}
		<span class="spinner"></span>
		Подписка...
	{:else}
		<BellIcon />
		Уведомления
	{/if}
</button>

{#if errorMessage}
	<p class="error">{errorMessage}</p>
{/if}

<style>
	.notify-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		border-radius: 9999px;
		font-weight: 700;
		font-size: 1rem;
		color: white;
		background: var(--color-primary);
		border: none;
		cursor: pointer;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.1s,
			filter 0.2s;
	}

	.notify-btn:hover {
		filter: brightness(1.1);
	}

	.notify-btn:active {
		transform: scale(0.95);
	}

	.notify-btn:disabled {
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
		margin-top: 0.5rem;
		font-size: 0.875rem;
		color: #ef4444;
	}
</style>
