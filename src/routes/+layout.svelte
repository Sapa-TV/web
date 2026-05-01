<script lang="ts">
	import BottomNav from "$cmp/BottomNav.svelte";
	import PawDecor from "$cmp/PawDecor.svelte";
	import PushToast from "$cmp/PushToast.svelte";
	import SakuraBg from "$cmp/SakuraBg.svelte";
	import ThemeToggle from "$cmp/ThemeToggle.svelte";
	import { onMount } from "svelte";
	import { pwaInfo } from "virtual:pwa-info";
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

<div class="min-h-screen paw-pattern relative bg-background">
	<SakuraBg />
	<PawDecor />

	<header class="hidden md:flex fixed top-20 right-4 z-40">
		<ThemeToggle />
	</header>

	<main
		class="relative z-10 px-4 pt-20 pb-24 md:pt-8 max-w-6xl mx-auto space-y-8"
	>
		{@render children()}
	</main>

	<BottomNav />
</div>

{#if toast}
	<PushToast
		title={toast.title}
		body={toast.body}
		icon={toast.icon}
		onclose={() => (toast = null)}
	/>
{/if}
