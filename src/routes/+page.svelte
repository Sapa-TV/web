<script lang="ts">
	import LiveStatus from "$cmp/LiveStatus.svelte";
	import NekoGallery from "$cmp/NekoGallery.svelte";
	import QuestCard from "$cmp/QuestCard.svelte";
	import RecentHighlights from "$cmp/RecentHighlights.svelte";
	import Stats from "$cmp/Stats.svelte";
</script>

<div class="text-center space-y-4 py-8">
	<div class="text-6xl md:text-8xl" style="transform: translateY(-9.40255px)">
		🐱⚔️
	</div>
	<h1 class="text-3xl md:text-5xl font-bold text-foreground text-balance">
		Welcome to the <span class="text-primary">Neko Shinobi</span> Sanctuary
	</h1>
	<p class="text-muted-foreground max-w-md mx-auto text-pretty">
		Where kawaii meets the way of the blade. Join our cozy gaming adventures! ✨
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
