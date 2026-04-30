<script lang="ts">
	const LIKES = 2400;
</script>

<div
	class="relative bg-card border border-border rounded-3xl shadow-lg p-6 overflow-hidden"
>
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
					<path
						d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
					></path>
					<path d="M20 2v4"></path>
					<path d="M22 4h-4"></path>
					<circle cx="4" cy="20" r="2"></circle>
				</svg>
				<h3 class="font-bold text-lg">Neko Gallery</h3>
			</div>
			<button class="text-primary" aria-label="Like">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
					aria-hidden="true"
				>
					<path
						d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
					></path>
				</svg>
			</button>
		</div>

		<div class="relative aspect-square rounded-2xl overflow-hidden bg-muted">
			<div
				class="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20 flex items-center justify-center"
			>
				<div class="text-center">
					<div class="text-8xl" style="transform: translateY(-4.70127px)">
						😺
					</div>
					<div class="relative -mt-16">
						<div class="w-24 h-8 bg-accent mx-auto rounded-t-full"></div>
						<div class="w-32 h-2 bg-accent mx-auto"></div>
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
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-4 h-4 fill-current"
					aria-hidden="true"
				>
					<path
						d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
					></path>
				</svg>
				<span>{LIKES.toLocaleString()}</span>
			</div>
		</div>
	</div>
</div>
