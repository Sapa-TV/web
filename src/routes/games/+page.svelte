<script lang="ts">
	import Cat from "~icons/lucide/cat";
	import Clock from "~icons/lucide/clock";
	import Moon from "~icons/lucide/moon";
	import PawPrint from "~icons/lucide/paw-print";
	import Skull from "~icons/lucide/skull";
	import Swords from "~icons/lucide/swords";
	import Trophy from "~icons/lucide/trophy";
</script>

<div class="text-center space-y-4 py-8">
	<div class="text-6xl" style="transform: rotate(-2.06897deg)">⚔️</div>
	<h1 class="text-3xl md:text-4xl font-bold text-foreground">Quest Log</h1>
	<p class="text-muted-foreground">
		The journey of a thousand deaths begins with a single paw step
	</p>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
	<div
		class="relative bg-card border border-border rounded-3xl shadow-lg p-6 text-center py-4"
	>
		<Trophy class="w-6 h-6 text-accent mx-auto mb-2" />
		<div class="text-2xl font-bold text-foreground">23</div>
		<div class="text-xs text-muted-foreground">Games Conquered</div>
	</div>
	<div
		class="relative bg-card border border-border rounded-3xl shadow-lg p-6 text-center py-4"
	>
		<Swords class="w-6 h-6 text-primary mx-auto mb-2" />
		<div class="text-2xl font-bold text-foreground">1</div>
		<div class="text-xs text-muted-foreground">In Progress</div>
	</div>
	<div
		class="relative bg-card border border-border rounded-3xl shadow-lg p-6 text-center py-4"
	>
		<Clock class="w-6 h-6 text-muted-foreground mx-auto mb-2" />
		<div class="text-2xl font-bold text-foreground">12</div>
		<div class="text-xs text-muted-foreground">Queued</div>
	</div>
	<div
		class="relative bg-card border border-border rounded-3xl shadow-lg p-6 text-center py-4"
	>
		<Skull class="w-6 h-6 text-primary mx-auto mb-2" />
		<div class="text-2xl font-bold text-foreground">4,892</div>
		<div class="text-xs text-muted-foreground">Total Deaths</div>
	</div>
</div>

<div class="space-y-6">
	<div class="flex items-center gap-3">
		<div
			class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
		>
			<PawPrint class="w-5 h-5 text-primary" />
		</div>
		<div>
			<h2 class="text-2xl font-bold text-foreground">The Scroll of Paws</h2>
			<p class="text-muted-foreground text-sm">
				Quest backlog for our brave neko
			</p>
		</div>
	</div>

	<div class="relative">
		<div
			class="absolute -top-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-accent rounded-full opacity-80"
		></div>
		<div
			class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-accent rounded-full opacity-80"
		></div>
		<div class="bg-card border-x-4 border-accent/40 rounded-lg py-6 space-y-3">
			<div class="px-6">
				<div
					class="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
				>
					<PawPrint class="w-4 h-4 text-primary/60 shrink-0" />
					<div class="flex-1 min-w-0">
						<h3 class="font-medium truncate line-through text-muted-foreground">
							Sekiro: Shadows Die Twice
						</h3>
						<div class="flex items-center gap-1 mt-1">
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
						</div>
					</div>
					<div
						class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/20"
					>
						<Trophy class="w-3.5 h-3.5" />
						<span>Conquered</span>
					</div>
				</div>
			</div>

			<div class="px-6">
				<div
					class="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
				>
					<PawPrint class="w-4 h-4 text-primary/60 shrink-0" />
					<div class="flex-1 min-w-0">
						<h3 class="font-medium truncate text-foreground">Elden Ring</h3>
						<div class="flex items-center gap-1 mt-1">
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-muted" />
						</div>
					</div>
					<div
						class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/20"
					>
						<Cat class="w-3.5 h-3.5" />
						<span>Fighting!</span>
					</div>
				</div>
			</div>

			<div class="px-6">
				<div
					class="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
				>
					<PawPrint class="w-4 h-4 text-primary/60 shrink-0" />
					<div class="flex-1 min-w-0">
						<h3 class="font-medium truncate text-foreground">Dark Souls III</h3>
						<div class="flex items-center gap-1 mt-1">
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-muted" />
						</div>
					</div>
					<div
						class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground bg-muted"
					>
						<Moon class="w-3.5 h-3.5" />
						<span>Sleeping</span>
					</div>
				</div>
			</div>

			<div class="px-6">
				<div
					class="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
				>
					<PawPrint class="w-4 h-4 text-primary/60 shrink-0" />
					<div class="flex-1 min-w-0">
						<h3 class="font-medium truncate text-foreground">Hollow Knight</h3>
						<div class="flex items-center gap-1 mt-1">
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-muted" />
							<PawPrint class="w-3 h-3 text-muted" />
						</div>
					</div>
					<div
						class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground bg-muted"
					>
						<Moon class="w-3.5 h-3.5" />
						<span>Sleeping</span>
					</div>
				</div>
			</div>

			<div class="px-6">
				<div
					class="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
				>
					<PawPrint class="w-4 h-4 text-primary/60 shrink-0" />
					<div class="flex-1 min-w-0">
						<h3 class="font-medium truncate text-foreground">Hades</h3>
						<div class="flex items-center gap-1 mt-1">
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-muted" />
							<PawPrint class="w-3 h-3 text-muted" />
						</div>
					</div>
					<div
						class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground bg-muted"
					>
						<Moon class="w-3.5 h-3.5" />
						<span>Sleeping</span>
					</div>
				</div>
			</div>

			<div class="px-6">
				<div
					class="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
				>
					<PawPrint class="w-4 h-4 text-primary/60 shrink-0" />
					<div class="flex-1 min-w-0">
						<h3 class="font-medium truncate text-foreground">Dead Cells</h3>
						<div class="flex items-center gap-1 mt-1">
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-primary" />
							<PawPrint class="w-3 h-3 text-muted" />
						</div>
					</div>
					<div
						class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground bg-muted"
					>
						<Moon class="w-3.5 h-3.5" />
						<span>Sleeping</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

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
	<h3 class="font-bold text-lg mb-4 flex items-center gap-2">
		<Clock class="w-5 h-5 text-primary" />
		Upcoming Streams
	</h3>
	<div class="space-y-3">
		<div class="flex items-center justify-between p-3 rounded-2xl bg-muted/50">
			<div>
				<p class="font-medium text-foreground">Monday</p>
				<p class="text-sm text-muted-foreground">Elden Ring</p>
			</div>
			<span class="text-sm text-primary font-medium">7:00 PM</span>
		</div>
		<div class="flex items-center justify-between p-3 rounded-2xl bg-muted/50">
			<div>
				<p class="font-medium text-foreground">Wednesday</p>
				<p class="text-sm text-muted-foreground">Dark Souls III</p>
			</div>
			<span class="text-sm text-primary font-medium">7:00 PM</span>
		</div>
		<div class="flex items-center justify-between p-3 rounded-2xl bg-muted/50">
			<div>
				<p class="font-medium text-foreground">Friday</p>
				<p class="text-sm text-muted-foreground">Community Game Night</p>
			</div>
			<span class="text-sm text-primary font-medium">8:00 PM</span>
		</div>
		<div class="flex items-center justify-between p-3 rounded-2xl bg-muted/50">
			<div>
				<p class="font-medium text-foreground">Saturday</p>
				<p class="text-sm text-muted-foreground">Roguelike Saturdays</p>
			</div>
			<span class="text-sm text-primary font-medium">3:00 PM</span>
		</div>
	</div>
</div>
