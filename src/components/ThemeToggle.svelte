<script lang="ts">
	import { browser } from "$app/environment";

	let isDark = $state(true);

	if (browser) {
		const stored = localStorage.getItem("theme");
		const prefersLight = window.matchMedia(
			"(prefers-color-scheme: light)",
		).matches;
		const initialDark = !(stored === "light" || (!stored && prefersLight));
		isDark = initialDark;
		updateTheme(initialDark);
	}

	function updateTheme(dark: boolean) {
		if (browser) {
			if (dark) {
				document.documentElement.removeAttribute("data-theme");
			} else {
				document.documentElement.setAttribute("data-theme", "light");
			}
		}
	}

	function toggleTheme() {
		isDark = !isDark;
		updateTheme(isDark);
		if (browser) {
			localStorage.setItem("theme", isDark ? "dark" : "light");
		}
	}
</script>

<button
	class="theme-toggle"
	onclick={toggleTheme}
	aria-label="Переключить тему"
>
	{isDark ? "☀️" : "🌙"}
</button>

<style>
	.theme-toggle {
		background: none;
		border: 1px solid var(--border);
		border-radius: 50px;
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 1.1rem;
		color: var(--text);
		transition: all 0.2s;
	}

	.theme-toggle:hover {
		background: var(--bg-card);
		border-color: var(--primary);
	}
</style>
