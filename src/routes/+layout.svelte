<script lang="ts">
	import { onMount } from "svelte";
	import { pwaInfo } from "virtual:pwa-info";
	import PushToast from "$cmp/PushToast.svelte";
	import "../app.css";
	import "../new.css";

	interface ToastData {
		title: string;
		body: string;
		icon?: string;
	}

	let toast = $state<ToastData | null>(null);

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import("virtual:pwa-register");
			registerSW({
				immediate: true,
				onRegistered(r) {
					console.warn("SW Registered:", r);
				},
				onRegisterError(error) {
					console.error("SW Registration error:", error);
				},
			});
		}

		navigator.serviceWorker.addEventListener("message", (event) => {
			const data = event.data as {
				type: string;
				title: string;
				body: string;
				icon?: string;
			};
			if (data.type === "push") {
				console.log("[Push] Received toast:", data);
				toast = { title: data.title, body: data.body, icon: data.icon };
			}
		});
	});

	let { children } = $props();
</script>

{#if toast}
	<PushToast
		title={toast.title}
		body={toast.body}
		icon={toast.icon}
		onclose={() => (toast = null)}
	/>
{/if}

{@render children()}
