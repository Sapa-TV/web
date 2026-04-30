<script lang="ts">
	import { page } from "$app/stores";
	import Camera from "~icons/lucide/camera";
	import Home from "~icons/lucide/home";
	import MessageCircleHeart from "~icons/lucide/message-circle-heart";
	import Swords from "~icons/lucide/swords";
	import Trophy from "~icons/lucide/trophy";

	interface NavItem {
		href: string;
		label: string;
		icon: typeof Home;
	}

	const navItems: NavItem[] = [
		{ href: "/", label: "Sanctuary", icon: Home },
		{ href: "/games", label: "Quests", icon: Swords },
		{ href: "/archive", label: "Victory", icon: Trophy },
		{ href: "/blog", label: "Diaries", icon: Camera },
		{ href: "/chat", label: "Meow", icon: MessageCircleHeart },
	];

	let currentPath = $derived($page.url.pathname);

	function isActive(href: string) {
		return currentPath === href;
	}
</script>

<nav class="fixed bottom-0 left-0 right-0 z-50 p-4 md:top-0 md:bottom-auto">
	<div class="max-w-md mx-auto">
		<div
			class="bg-card/95 backdrop-blur-md border border-border rounded-3xl shadow-xl p-2 flex items-center justify-around"
		>
			{#each navItems as item (item.href)}
				<a href={item.href}>
					<div
						class="relative flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-colors {isActive(
							item.href,
						)
							? 'bg-primary text-primary-foreground'
							: 'hover:bg-muted text-muted-foreground hover:text-foreground'}"
					>
						{#if isActive(item.href)}
							<span
								class="absolute -top-2 left-2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-10 border-l-transparent border-r-transparent border-b-primary transform -rotate-15"
							></span>
							<span
								class="absolute -top-2 right-2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-10 border-l-transparent border-r-transparent border-b-primary transform rotate-15"
							></span>
						{/if}

						<item.icon class="w-5 h-5" />

						<span class="text-xs font-medium hidden md:block">{item.label}</span
						>
					</div>
				</a>
			{/each}
		</div>
	</div>
</nav>
