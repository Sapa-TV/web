<script lang="ts">
	import { browser } from "$app/environment";
	import { api } from "$lib/api";
	import { subscribeToNotifications } from "$lib/push";

	let loading = $state(false);
	let errorMessage = $state<string | null>(null);

	async function handleClick() {
		if (!browser) return;

		loading = true;
		errorMessage = null;

		const vapidResult = await api.getVapidPublicKey();
		if (vapidResult.isErr()) {
			loading = false;
			errorMessage = vapidResult.error.message;
			return;
		}

		const subResult = await subscribeToNotifications(vapidResult.value.key);
		if (subResult.isErr()) {
			loading = false;
			errorMessage = subResult.error.message;
			return;
		}

		const postResult = await api.postSubscription(subResult.value);
		loading = false;

		if (postResult.isErr()) {
			errorMessage = postResult.error.message;
		}
	}
</script>

<button class="notify-btn" onclick={handleClick} disabled={loading}>
	{#if loading}
		<span class="spinner"></span>
		Подписка...
	{:else}
		<svg viewBox="0 0 24 24"
			><path
				d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
			/></svg
		>
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

	.notify-btn svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: white;
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
