import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte",
		}),
		SvelteKitPWA({
			strategies: "injectManifest",
			registerType: process.env.NODE_ENV === 'development' ? 'prompt' : 'autoUpdate',
			injectRegister: false,
			srcDir: "src",
			filename: "service-worker.ts",
			injectManifest: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg,txt}"],
				globIgnores: ["**/widgets/**/*", "**/api/**/*"],
			},
			// workbox: {
			// 	navigateFallbackDenylist: [/^\/widgets/, /^\/api/],
			// 	runtimeCaching: [
			// 		{
			// 			urlPattern: /^\/widgets\/.*/,
			// 			handler: "NetworkOnly",
			// 		},
			// 		{
			// 			urlPattern: /^\/api\/.*/,
			// 			handler: "NetworkOnly",
			// 		},
			// 	],
			// 	globIgnores: ["**/widgets/**/*", "**/api/**/*"],
			// 	skipWaiting: true,
			// 	clientsClaim: true,
			// },
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
	optimizeDeps: {
		exclude: ["api-contracts"],
	},
	server: {
		watch: {
			ignored: ["!**/node_modules/api-contracts/**"],
		},
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
		},
	},
});
