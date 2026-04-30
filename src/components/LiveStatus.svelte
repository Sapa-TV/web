<script lang="ts">
	const VIEWERS = 1247;
	const GAME = "Elden Ring";
</script>

<div class="relative">
	<div
		class="bg-card border-2 border-primary rounded-full px-8 py-6 shadow-xl pulse-glow"
	>
		<div class="flex items-center gap-4">
			<div class="relative">
				<div
					class="w-4 h-4 bg-red-500 rounded-full"
					style="transform: scale(1.17632)"
				></div>
			</div>
			<div class="flex-1">
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
						class="w-5 h-5 text-primary"
						aria-hidden="true"
					>
						<path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
						<path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
						<path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
						<path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
						<circle cx="12" cy="12" r="2"></circle>
					</svg>
					<span class="font-bold text-lg">LIVE NOW!</span>
				</div>
				<p class="text-sm text-muted-foreground mt-1">
					Playing <span class="text-primary font-semibold">{GAME}</span> • {VIEWERS.toLocaleString()}
					viewers
				</p>
			</div>
			<button
				class="h-9 py-2 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 bouncy"
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
					class="w-4 h-4 mr-2"
					aria-hidden="true"
				>
					<path
						d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
					></path>
				</svg>
				Watch
			</button>
		</div>
	</div>
	<span
		class="absolute -top-2 -right-2 text-xl"
		style="transform: scale(0.988051)">✨</span
	>
	<span
		class="absolute -bottom-2 -left-2 text-xl"
		style="transform: scale(0.944488)">⭐</span
	>
</div>
