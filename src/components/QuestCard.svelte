<script lang="ts">
	import FlameIcon from "~icons/lucide/flame";
	import SkullIcon from "~icons/lucide/skull";
	import SwordsIcon from "~icons/lucide/swords";

	const PROGRESS = 67;
	const DEATHS = 142;
	const BOSS = "Malenia, Blade of Miquella";
	const GAME = "Elden Ring";
</script>

<div class="relative bg-card border border-border rounded-3xl shadow-lg p-6">
	<div
		class="absolute -top-3 left-4 w-0 h-0 border-l-10 border-r-10 border-b-16 border-l-transparent border-r-transparent border-b-primary transform -rotate-12"
	></div>
	<div
		class="absolute -top-3 right-4 w-0 h-0 border-l-10 border-r-10 border-b-16 border-l-transparent border-r-transparent border-b-primary transform rotate-12"
	></div>
	<div
		class="absolute -top-1.5 left-4.5 w-0 h-0 border-l-[6px] border-r-[6px] border-b-10 border-l-transparent border-r-transparent border-b-card transform -rotate-12"
	></div>
	<div
		class="absolute -top-1.5 right-4.5 w-0 h-0 border-l-[6px] border-r-[6px] border-b-10 border-l-transparent border-r-transparent border-b-card transform rotate-12"
	></div>

	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<SwordsIcon class="w-5 h-5 text-accent" />
				<h3 class="font-bold text-lg">Current Quest</h3>
			</div>
			<span
				class="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium"
				>In Progress</span
			>
		</div>

		<div class="flex items-center gap-4">
			<div
				class="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center"
			>
				<FlameIcon class="w-8 h-8 text-accent" />
			</div>
			<div class="flex-1">
				<h4 class="font-bold text-foreground">{GAME}</h4>
				<p class="text-sm text-muted-foreground">Boss: {BOSS}</p>
			</div>
		</div>

		<div class="space-y-2">
			<div class="flex justify-between text-sm">
				<span class="text-muted-foreground">Journey Progress</span>
				<span class="text-primary font-bold">{PROGRESS}%</span>
			</div>
			<div
				class="relative h-4 bg-muted rounded-sm overflow-hidden katana-progress"
			>
				<div
					class="absolute inset-y-0 left-0 bg-primary rounded-sm katana-progress"
					style="width: {PROGRESS}%"
				></div>
				<div
					class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rotate-45 -mr-1"
					style="opacity: 1"
				></div>
			</div>
		</div>

		<div
			class="flex items-center justify-center gap-2 py-2 bg-muted/50 rounded-2xl"
		>
			<SkullIcon class="w-4 h-4 text-muted-foreground" />
			<span class="text-sm"
				>Deaths: <span class="font-bold text-primary">{DEATHS}</span></span
			>
			<span class="text-xs text-muted-foreground">(and counting...)</span>
		</div>
	</div>
</div>
