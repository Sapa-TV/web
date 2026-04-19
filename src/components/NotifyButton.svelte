<script lang="ts">
	import { browser } from "$app/environment";
	import { getVapidKey, subscribePush } from "$lib/api";
	import { subscribeToNotifications } from "$lib/push";

	async function handleClick() {
		if (!browser) return;

		const keyResult = await getVapidKey();
		if (keyResult.err) {
			alert("Ошибка: " + keyResult.val);
			return;
		}

		const subscriptionResult = await subscribeToNotifications(keyResult.val);
		if (subscriptionResult.err) {
			alert("Ошибка: " + subscriptionResult.val);
			return;
		}

		const pushResult = await subscribePush(subscriptionResult.val);
		if (pushResult.err) {
			alert("Ошибка: " + pushResult.val);
			return;
		}

		alert("Подписка успешна!");
	}
</script>

<button class="notify-btn" onclick={handleClick}>
	<svg viewBox="0 0 24 24"
		><path
			d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
		/></svg
	>
	Уведомления
</button>

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
</style>
