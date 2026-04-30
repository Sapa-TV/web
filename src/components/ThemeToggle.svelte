<script lang="ts">
	import { browser } from "$app/environment";

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
	class="size-9 rounded-full w-10 h-10 bg-card hover:bg-primary/20 border border-border shadow-lg flex items-center justify-center transition-all hover:text-accent-foreground"
	aria-label="Toggle theme"
>
	<div style={isDark ? "transform: rotate(180deg)" : ""}>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="w-5 h-5 text-primary"
		>
			<path
				d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
			></path>
		</svg>
	</div>
</button>
