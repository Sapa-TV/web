<script lang="ts">
	import { onMount } from "svelte";
	import { pwaInfo } from "virtual:pwa-info";
	import "../app.css";

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
	});

	let { children } = $props();
</script>

{@render children()}
