<script lang="ts">
	import Calendar from "~icons/lucide/calendar";
	import Funnel from "~icons/lucide/funnel";
	import PawPrint from "~icons/lucide/paw-print";
	import Trophy from "~icons/lucide/trophy";

	interface Game {
		emoji: string;
		title: string;
		date: string;
		rating: number;
		rotation: string;
		translateY: string;
	}

	const MAX_RATING = 5;

	const games: Game[] = [
		{
			emoji: "🥷",
			title: "Sekiro: Shadows Die Twice",
			date: "Dec 2024",
			rating: 5,
			rotation: "-3deg",
			translateY: "-3.63868px",
		},
		{
			emoji: "🔥",
			title: "Elden Ring (NG+7)",
			date: "Nov 2024",
			rating: 5,
			rotation: "none",
			translateY: "-4.86947px",
		},
		{
			emoji: "☀️",
			title: "Dark Souls III",
			date: "Oct 2024",
			rating: 4,
			rotation: "3deg",
			translateY: "-3.80714px",
		},
		{
			emoji: "🦋",
			title: "Hollow Knight",
			date: "Sep 2024",
			rating: 4,
			rotation: "-3deg",
			translateY: "-2.06075px",
		},
		{
			emoji: "🍓",
			title: "Celeste",
			date: "Aug 2024",
			rating: 4,
			rotation: "none",
			translateY: "-0.0057886px",
		},
		{
			emoji: "🔱",
			title: "Hades",
			date: "Jul 2024",
			rating: 3,
			rotation: "3deg",
			translateY: "-0.747199px",
		},
		{
			emoji: "⚗️",
			title: "Dead Cells",
			date: "Jun 2024",
			rating: 4,
			rotation: "-3deg",
			translateY: "-2.29695px",
		},
		{
			emoji: "☕",
			title: "Cuphead",
			date: "May 2024",
			rating: 4,
			rotation: "none",
			translateY: "-4.39065px",
		},
		{
			emoji: "✝️",
			title: "Blasphemous",
			date: "Apr 2024",
			rating: 4,
			rotation: "3deg",
			translateY: "-4.61286px",
		},
		{
			emoji: "👹",
			title: "Salt and Sanctuary",
			date: "Mar 2024",
			rating: 3,
			rotation: "-3deg",
			translateY: "-2.06075px",
		},
		{
			emoji: "🌙",
			title: "Bloodborne",
			date: "Feb 2024",
			rating: 5,
			rotation: "none",
			translateY: "-0.0057886px",
		},
		{
			emoji: "⛩️",
			title: "Returnal",
			date: "Jan 2024",
			rating: 4,
			rotation: "3deg",
			translateY: "-0.747199px",
		},
	];
</script>

<div class="text-center space-y-4 py-8">
	<div class="text-6xl" style="transform: scale(1.07277) rotate(-4.14956deg)">
		🏆
	</div>
	<h1 class="text-3xl md:text-4xl font-bold text-foreground">
		Hall of Victory
	</h1>
	<p class="text-muted-foreground">
		Every conquered boss, every defeated demon - immortalized forever
	</p>
</div>

<div class="flex items-center justify-between">
	<div class="flex items-center gap-2 text-sm text-muted-foreground">
		<Trophy class="w-4 h-4 text-primary" />
		<span>12 Games Conquered</span>
	</div>
	<button
		class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 px-3 rounded-full gap-2"
	>
		<Funnel class="w-4 h-4" />
		<span class="hidden sm:inline">Filter</span>
	</button>
</div>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
	{#each games as game, i (i)}
		<div
			class="bg-card rounded-lg shadow-xl p-3 cursor-pointer"
			style="opacity: 1; transform: rotate({game.rotation})"
		>
			<div
				class="aspect-square bg-muted rounded-md mb-3 flex items-center justify-center text-6xl relative overflow-hidden"
			>
				<div
					class="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10"
				></div>
				<span style="transform: translateY({game.translateY})"
					>{game.emoji}</span
				>
			</div>
			<div class="space-y-2 px-1">
				<h3 class="font-bold text-sm text-foreground line-clamp-1">
					{game.title}
				</h3>
				<div class="flex items-center gap-1 text-xs text-muted-foreground">
					<Calendar class="w-3 h-3" />
					<span>{game.date}</span>
				</div>
				<div class="flex items-center gap-0.5">
					{#each Array(game.rating) as _, j (j)}
						<PawPrint class="w-3 h-3 text-primary fill-primary/30" />
					{/each}
					{#each Array(MAX_RATING - game.rating) as _, j (j)}
						<PawPrint class="w-3 h-3 text-muted" />
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="text-center py-8">
	<button
		class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 py-2 rounded-full px-8 gap-2"
	>
		<span>Load More Victories</span>
		<span>🐾</span>
	</button>
</div>
