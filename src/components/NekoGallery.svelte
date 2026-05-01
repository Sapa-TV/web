<script lang="ts">
	import HeartIcon from "~icons/lucide/heart";
	import SparklesIcon from "~icons/lucide/sparkles";
	import HeartFilledIcon from "~icons/tabler/heart-filled";
	const LIKES = 2400;
</script>

<div
	class="relative bg-card border border-border rounded-3xl shadow-lg p-6 overflow-hidden"
>
	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<SparklesIcon class="w-5 h-5 text-accent" />
				<h3 class="font-bold text-lg">Neko Gallery</h3>
			</div>
			<button class="text-primary" aria-label="Like">
				<HeartIcon class="w-5 h-5" />
			</button>
		</div>

		<div class="relative aspect-square rounded-2xl overflow-hidden bg-muted">
			<div
				class="absolute inset-0 bg-linear-to-b from-primary/20 to-accent/20 flex items-center justify-center"
			>
				<div class="text-center">
					<div class="text-8xl" style="transform: translateY(-4.70127px)">
						😺
					</div>
				</div>
			</div>
			<div
				class="absolute inset-2 border-2 border-primary/30 rounded-xl pointer-events-none"
			></div>
			<div
				class="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-accent"
			></div>
			<div
				class="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-accent"
			></div>
			<div
				class="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-accent"
			></div>
			<div
				class="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-accent"
			></div>
		</div>

		<div class="flex items-center justify-between text-sm">
			<span class="text-muted-foreground">Kawaii Shinobi Neko</span>
			<div class="flex items-center gap-1 text-primary">
				<HeartFilledIcon class="w-4 h-4 fill-current" />
				<span>{LIKES.toLocaleString()}</span>
			</div>
		</div>
	</div>
</div>
