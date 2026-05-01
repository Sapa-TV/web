<script lang="ts">
	import SparklesIcon from "~icons/lucide/sparkles";

	interface Highlight {
		emoji: string;
		text: string;
		time: string;
	}

	const highlights: Highlight[] = [
		{ emoji: "⚔️", text: "Defeated Margit on first try!", time: "2h ago" },
		{ emoji: "🎉", text: "Reached 12k followers milestone!", time: "1d ago" },
		{
			emoji: "😿",
			text: "Lost to Malenia 47 times in a row...",
			time: "2d ago",
		},
		{
			emoji: "🏆",
			text: "Completed Sekiro blindfolded challenge!",
			time: "3d ago",
		},
	];
</script>

<div class="relative bg-card border border-border rounded-3xl shadow-lg p-6">
	<div class="flex items-center gap-2 mb-4">
		<SparklesIcon class="w-5 h-5 text-accent" />
		<h3 class="font-bold text-lg">Recent Highlights</h3>
	</div>
	<div class="space-y-3">
		{#each highlights as item, i (i)}
			<div
				class="flex items-center gap-3 p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
			>
				<span class="text-2xl">{item.emoji}</span>
				<div class="flex-1">
					<p class="text-sm font-medium text-foreground">{item.text}</p>
				</div>
				<span class="text-xs text-muted-foreground">{item.time}</span>
			</div>
		{/each}
	</div>
</div>
