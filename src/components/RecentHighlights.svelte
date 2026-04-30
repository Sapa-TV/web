<script lang="ts">
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
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="w-5 h-5 text-accent"
			aria-hidden="true"
		>
			<path
				d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
			></path>
			<path d="M20 2v4"></path>
			<path d="M22 4h-4"></path>
			<circle cx="4" cy="20" r="2"></circle>
		</svg>
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
