<script lang="ts">
	import { browser } from "$app/environment";
	import MoonIcon from "~icons/lucide/moon";
	import SunIcon from "~icons/lucide/sun";

	let isDark = $state(true);

	function toggleTheme() {
		isDark = !isDark;
		if (browser) {
			document.documentElement.classList.toggle("dark", isDark);
		}
	}
</script>

<button
	onclick={toggleTheme}
	class="size-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-all hover:text-accent-foreground"
	aria-label="Toggle theme"
>
	<div class="theme-icon" class:rotate={isDark}>
		{#if isDark}
			<SunIcon class="w-5 h-5 text-primary" />
		{:else}
			<MoonIcon class="w-5 h-5 text-primary" />
		{/if}
	</div>
</button>

<style>
	.theme-icon {
		&.rotate {
			transform: rotate(180deg);
		}
		pointer-events: none;
		& :global(svg) {
			pointer-events: none;
		}
	}
	button {
		cursor: pointer;
	}
</style>
