<script lang="ts">
	import BottomNav from "$cmp/BottomNav.svelte";
	import LiveStatus from "$cmp/LiveStatus.svelte";
	import NekoGallery from "$cmp/NekoGallery.svelte";
	import PawDecor from "$cmp/PawDecor.svelte";
	import QuestCard from "$cmp/QuestCard.svelte";
	import RecentHighlights from "$cmp/RecentHighlights.svelte";
	import SakuraBg from "$cmp/SakuraBg.svelte";
	import Stats from "$cmp/Stats.svelte";
	import ThemeToggle from "$cmp/ThemeToggle.svelte";
</script>

<div class="flex min-h-screen paw-pattern relative bg-background">
	<SakuraBg />
	<PawDecor />

	<header
		class="fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center md:hidden"
	></header>

	<header class="hidden md:flex fixed top-20 right-4 z-40">
		<ThemeToggle />
	</header>

	<main
		class="relative z-10 px-4 pt-20 pb-24 md:pt-8 max-w-6xl mx-auto space-y-8"
	>
		<div class="text-center space-y-4 py-8">
			<div
				class="text-6xl md:text-8xl"
				style="transform: translateY(-9.40255px)"
			>
				🐱⚔️
			</div>
			<h1 class="text-3xl md:text-5xl font-bold text-foreground text-balance">
				Welcome to the <span class="text-primary">Neko Shinobi</span> Sanctuary
			</h1>
			<p class="text-muted-foreground max-w-md mx-auto text-pretty">
				Where kawaii meets the way of the blade. Join our cozy gaming
				adventures! ✨
			</p>
		</div>

		<div class="flex justify-center">
			<LiveStatus />
		</div>

		<Stats />

		<div class="grid md:grid-cols-2 gap-6">
			<QuestCard />
			<NekoGallery />
		</div>

		<RecentHighlights />
	</main>

	<BottomNav />
</div>
