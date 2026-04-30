<script lang="ts">
	import BottomNav from "$cmp/BottomNav.svelte";
	import PawDecor from "$cmp/PawDecor.svelte";
	import SakuraBg from "$cmp/SakuraBg.svelte";
	import ThemeToggle from "$cmp/ThemeToggle.svelte";
	import MessageCircleHeart from "~icons/lucide/message-circle-heart";
	import Users from "~icons/lucide/users";
	import Star from "~icons/lucide/star";
	import Gift from "~icons/lucide/gift";
	import Send from "~icons/lucide/send";
</script>

<div class="min-h-screen paw-pattern relative bg-background">
	<SakuraBg />
	<PawDecor />

	<header
		class="fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center md:hidden"
	></header>

	<header class="hidden md:flex fixed top-20 right-4 z-40">
		<ThemeToggle />
	</header>

	<main
		class="relative z-10 px-4 pt-20 pb-24 md:pt-8 max-w-4xl mx-auto space-y-6"
	>
		<div class="text-center space-y-4 py-6">
			<div class="text-5xl" style="transform: scale(1.08352)">💬</div>
			<h1 class="text-3xl md:text-4xl font-bold text-foreground">Meow Chat</h1>
			<p class="text-muted-foreground">
				Connect with fellow neko warriors! Be kind and kawaii 💕
			</p>
		</div>

		<div class="flex items-center justify-center gap-6 text-sm">
			<div class="flex items-center gap-2 text-primary">
				<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
				<span class="font-medium">Live Now</span>
			</div>
			<div class="flex items-center gap-2 text-muted-foreground">
				<Users class="w-4 h-4" />
				<span>1,247 watching</span>
			</div>
		</div>

		<div
			class="relative bg-card border border-border rounded-3xl shadow-lg p-6 h-100 flex flex-col"
		>
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

			<div
				class="flex items-center justify-between pb-3 border-b border-border"
			>
				<div class="flex items-center gap-2">
					<MessageCircleHeart class="w-5 h-5 text-primary" />
					<span class="font-bold">Stream Chat</span>
				</div>
				<div class="flex items-center gap-2">
					<button class="p-2 rounded-full hover:bg-muted">
						<Star class="w-4 h-4 text-accent" />
					</button>
					<button class="p-2 rounded-full hover:bg-muted">
						<Gift class="w-4 h-4 text-primary" />
					</button>
				</div>
			</div>

			<div class="flex-1 overflow-y-auto py-4 space-y-3">
				<div class="flex items-start gap-2 group">
					<div
						class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm shrink-0"
					>
						S
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<span class="font-bold text-sm text-foreground"
								>SakuraNinja42</span
							>
							<span
								class="px-1.5 py-0.5 bg-primary/20 text-primary text-[10px] rounded-full"
								>SUB</span
							>
							<span class="text-xs text-muted-foreground">2m ago</span>
						</div>
						<p class="text-sm text-foreground/90">First! Love your streams!</p>
					</div>
					<button
						class="opacity-0 group-hover:opacity-100 transition-opacity p-1"
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
							class="lucide lucide-heart w-4 h-4 text-muted-foreground hover:text-primary"
						>
							<path
								d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
							></path>
						</svg>
					</button>
				</div>

				<div class="flex items-start gap-2 group">
					<div
						class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm shrink-0"
					>
						D
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<span class="font-bold text-sm text-foreground">DarkSoulsFan</span
							>
							<span
								class="px-1.5 py-0.5 bg-accent/20 text-accent text-[10px] rounded-full"
								>VIP</span
							>
							<span class="text-xs text-muted-foreground">2m ago</span>
						</div>
						<p class="text-sm text-foreground/90">
							You can do it! Malenia is tough but you got this!
						</p>
					</div>
					<button
						class="opacity-0 group-hover:opacity-100 transition-opacity p-1"
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
							class="lucide lucide-heart w-4 h-4 text-muted-foreground hover:text-primary"
						>
							<path
								d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
							></path>
						</svg>
					</button>
				</div>

				<div class="flex items-start gap-2 group">
					<div
						class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm shrink-0"
					>
						K
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<span class="font-bold text-sm text-foreground">KawaiiGamer</span>
							<span
								class="px-1.5 py-0.5 bg-primary/20 text-primary text-[10px] rounded-full"
								>SUB</span
							>
							<span class="text-xs text-muted-foreground">1m ago</span>
						</div>
						<p class="text-sm text-foreground/90">
							NekoShinobi supremacy! 🐱⚔️
						</p>
					</div>
					<button
						class="opacity-0 group-hover:opacity-100 transition-opacity p-1"
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
							class="lucide lucide-heart w-4 h-4 text-muted-foreground hover:text-primary"
						>
							<path
								d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
							></path>
						</svg>
					</button>
				</div>

				<div class="flex items-start gap-2 group">
					<div
						class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm shrink-0"
					>
						C
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<span class="font-bold text-sm text-foreground">CozyCatLover</span
							>
							<span class="text-xs text-muted-foreground">1m ago</span>
						</div>
						<p class="text-sm text-foreground/90">
							The new overlay looks amazing!
						</p>
					</div>
					<button
						class="opacity-0 group-hover:opacity-100 transition-opacity p-1"
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
							class="lucide lucide-heart w-4 h-4 text-muted-foreground hover:text-primary"
						>
							<path
								d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
							></path>
						</svg>
					</button>
				</div>

				<div class="flex items-start gap-2 group">
					<div
						class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm shrink-0"
					>
						E
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<span class="font-bold text-sm text-foreground">EldenLord99</span>
							<span
								class="px-1.5 py-0.5 bg-primary/20 text-primary text-[10px] rounded-full"
								>SUB</span
							>
							<span class="text-xs text-muted-foreground">30s ago</span>
						</div>
						<p class="text-sm text-foreground/90">
							Have you tried jumping? lol
						</p>
					</div>
					<button
						class="opacity-0 group-hover:opacity-100 transition-opacity p-1"
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
							class="lucide lucide-heart w-4 h-4 text-muted-foreground hover:text-primary"
						>
							<path
								d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
							></path>
						</svg>
					</button>
				</div>

				<div class="flex items-start gap-2 group">
					<div
						class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm shrink-0"
					>
						P
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-2 flex-wrap">
							<span class="font-bold text-sm text-foreground">PixelPaws</span>
							<span
								class="px-1.5 py-0.5 bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] rounded-full"
								>NEW</span
							>
							<span class="text-xs text-muted-foreground">just now</span>
						</div>
						<p class="text-sm text-foreground/90">
							Just subscribed! Been following for months 💕
						</p>
					</div>
					<button
						class="opacity-0 group-hover:opacity-100 transition-opacity p-1"
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
							class="lucide lucide-heart w-4 h-4 text-muted-foreground hover:text-primary"
						>
							<path
								d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
							></path>
						</svg>
					</button>
				</div>
			</div>

			<div class="flex items-center gap-1 py-2 border-t border-border">
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">😺</button>
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">⚔️</button>
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">🌸</button>
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">✨</button>
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">💕</button>
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">🔥</button>
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">🏆</button>
				<button class="p-1.5 hover:bg-muted rounded-lg text-lg">😿</button>
			</div>

			<div class="flex items-center gap-2 pt-2 border-t border-border">
				<input
					placeholder="Send a message..."
					class="flex-1 px-4 py-2 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
					type="text"
				/>
				<button
					class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-primary-foreground size-9 rounded-full bg-primary hover:bg-primary/90 p-0"
				>
					<Send class="w-4 h-4" />
				</button>
			</div>
		</div>

		<div
			class="relative bg-card border border-border rounded-3xl shadow-lg p-6"
		>
			<h3 class="font-bold mb-3 flex items-center gap-2">
				<span>🐱</span><span>Chat Rules</span>
			</h3>
			<ul class="space-y-2 text-sm text-muted-foreground">
				<li class="flex items-start gap-2">
					<span>💕</span><span>Be kind and respectful to everyone</span>
				</li>
				<li class="flex items-start gap-2">
					<span>🚫</span><span>No spoilers for games being played</span>
				</li>
				<li class="flex items-start gap-2">
					<span>🌸</span><span>Keep it kawaii - spread positivity!</span>
				</li>
				<li class="flex items-start gap-2">
					<span>🐾</span><span>Listen to the mods - they are here to help</span>
				</li>
			</ul>
		</div>
	</main>

	<BottomNav />
</div>
