<script lang="ts">
	import Footer from "$cmp/Footer.svelte";
	import Header from "$cmp/Header.svelte";
	import PushToast from "$cmp/PushToast.svelte";
	import { onMount } from "svelte";
	import { pwaInfo } from "virtual:pwa-info";
	import "../app.css";
	import "../new.css";
	import "./global.css";

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

<Header />

<main class="container with-header">
	{@render children()}
</main>

<Footer />

{#if toast}
	<PushToast
		title={toast.title}
		body={toast.body}
		icon={toast.icon}
		onclose={() => (toast = null)}
	/>
{/if}

<style>
	.with-header {
		padding-top: calc(var(--nav-height, 64px) + 20px);
	}
</style>
