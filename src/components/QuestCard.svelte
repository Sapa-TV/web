<script lang="ts">
	const PROGRESS = 67;
	const DEATHS = 142;
	const BOSS = "Malenia, Blade of Miquella";
	const GAME = "Elden Ring";
</script>

<div class="relative bg-card border border-border rounded-3xl shadow-lg p-6">
	<div
		class="absolute -top-3 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-primary transform -rotate-12"
	></div>
	<div
		class="absolute -top-3 right-4 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-primary transform rotate-12"
	></div>
	<div
		class="absolute -top-1.5 left-[18px] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-card transform -rotate-12"
	></div>
	<div
		class="absolute -top-1.5 right-[18px] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-card transform rotate-12"
	></div>

	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
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
					<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
					<line x1="13" x2="19" y1="19" y2="13"></line>
					<line x1="16" x2="20" y1="16" y2="20"></line>
					<line x1="19" x2="21" y1="21" y2="19"></line>
					<polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline>
					<line x1="5" x2="9" y1="14" y2="18"></line>
					<line x1="7" x2="4" y1="17" y2="20"></line>
					<line x1="3" x2="5" y1="19" y2="21"></line>
				</svg>
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
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-8 h-8 text-accent"
					aria-hidden="true"
				>
					<path
						d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
					></path>
				</svg>
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
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="w-4 h-4 text-muted-foreground"
				aria-hidden="true"
			>
				<path d="m12.5 17-.5-1-.5 1h1z"></path>
				<path
					d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
				></path>
				<circle cx="15" cy="12" r="1"></circle>
				<circle cx="9" cy="12" r="1"></circle>
			</svg>
			<span class="text-sm"
				>Deaths: <span class="font-bold text-primary">{DEATHS}</span></span
			>
			<span class="text-xs text-muted-foreground">(and counting...)</span>
		</div>
	</div>
</div>
