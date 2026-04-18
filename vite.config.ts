import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			workbox: {
				navigateFallbackDenylist: [/^\/widgets/],
				runtimeCaching: [
					{
						urlPattern: /^\/widgets\/.*/,
						handler: 'NetworkOnly',
					}
				],
				globIgnores: ['**/widgets/**/*']
			},
			devOptions: {
				enabled: true,
				type: "module",
			},
			pwaAssets: {
				image: "static/avatar.jpg",
				preset: "minimal-2023",
				includeHtmlHeadLinks: true,
				overrideManifestIcons: true,
			},
			manifest: {
				name: "Sapa-TV website",
				short_name: "Sapa",
				description: "Сайт Сапушки",
				display: "standalone",
				background_color: "#eff8ff",
				theme_color: "#00647b",
			},
		}),
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: "./vite.config.ts",
				test: {
					name: "client",
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: "chromium", headless: true }],
					},
					include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
					exclude: ["src/lib/server/**"],
				},
			},

			{
				extends: "./vite.config.ts",
				test: {
					name: "server",
					environment: "node",
					include: ["src/**/*.{test,spec}.{js,ts}"],
					exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
				},
			},
		],
	},
});
