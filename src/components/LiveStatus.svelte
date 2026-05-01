<script lang="ts">
	import PlayIcon from "~icons/lucide/play";
	import RadioIcon from "~icons/lucide/radio";
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
					<RadioIcon class="w-5 h-5 text-primary" aria-hidden="true" />
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
				<PlayIcon class="w-4 h-4" aria-hidden="true" />
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
