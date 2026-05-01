<script lang="ts">
	import Camera from "~icons/lucide/camera";
	import Clock from "~icons/lucide/clock";
	import Heart from "~icons/lucide/heart";
	import MessageCircle from "~icons/lucide/message-circle";
	import PawPrint from "~icons/lucide/paw-print";
	import Sparkles from "~icons/lucide/sparkles";
</script>

<div class="text-center space-y-4 py-8">
	<div class="text-6xl" style="transform: rotate(-3.5699deg)">📸</div>
	<h1 class="text-3xl md:text-4xl font-bold text-foreground">Neko Diaries</h1>
	<p class="text-muted-foreground">
		Adventures, thoughts, and behind-the-scenes from our kawaii gaming journey
	</p>
</div>

<section>
	<div class="flex items-center gap-2 mb-4">
		<Sparkles class="w-5 h-5 text-accent" />
		<h2 class="font-bold text-lg">Quick Updates</h2>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		<div
			class="bg-primary/20 border-primary/30 border-2 rounded-lg p-4 shadow-md cursor-pointer relative"
			style="transform: rotate(-4deg)"
		>
			<div
				class="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-primary/20 rounded-sm transform rotate-1"
			></div>
			<p class="text-sm text-foreground leading-relaxed mb-3 font-medium">
				Just got a new cat plushie for the stream room! 🐱
			</p>
			<div
				class="flex items-center justify-between text-xs text-muted-foreground"
			>
				<span>2h ago</span>
				<div class="flex items-center gap-3">
					<div class="flex items-center gap-1">
						<Heart class="w-3 h-3" />
						<span>45</span>
					</div>
					<div class="flex items-center gap-1">
						<MessageCircle class="w-3 h-3" />
						<span>12</span>
					</div>
				</div>
			</div>
		</div>
		<div
			class="bg-accent/20 border-accent/30 border-2 rounded-lg p-4 shadow-md cursor-pointer relative"
			style="transform: rotate(-2deg)"
		>
			<div
				class="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-primary/20 rounded-sm transform rotate-1"
			></div>
			<p class="text-sm text-foreground leading-relaxed mb-3 font-medium">
				Stream postponed to 8PM today - cat demanded attention
			</p>
			<div
				class="flex items-center justify-between text-xs text-muted-foreground"
			>
				<span>5h ago</span>
				<div class="flex items-center gap-3">
					<div class="flex items-center gap-1">
						<Heart class="w-3 h-3" />
						<span>89</span>
					</div>
					<div class="flex items-center gap-1">
						<MessageCircle class="w-3 h-3" />
						<span>23</span>
					</div>
				</div>
			</div>
		</div>
		<div
			class="bg-blue-200/40 dark:bg-blue-900/30 border-blue-300/50 border-2 rounded-lg p-4 shadow-md cursor-pointer relative"
		>
			<div
				class="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-primary/20 rounded-sm transform rotate-1"
			></div>
			<p class="text-sm text-foreground leading-relaxed mb-3 font-medium">
				New emotes are being designed! Preview coming soon~
			</p>
			<div
				class="flex items-center justify-between text-xs text-muted-foreground"
			>
				<span>1d ago</span>
				<div class="flex items-center gap-3">
					<div class="flex items-center gap-1">
						<Heart class="w-3 h-3" />
						<span>156</span>
					</div>
					<div class="flex items-center gap-1">
						<MessageCircle class="w-3 h-3" />
						<span>34</span>
					</div>
				</div>
			</div>
		</div>
		<div
			class="bg-green-200/40 dark:bg-green-900/30 border-green-300/50 border-2 rounded-lg p-4 shadow-md cursor-pointer relative"
			style="transform: rotate(2deg)"
		>
			<div
				class="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-primary/20 rounded-sm transform rotate-1"
			></div>
			<p class="text-sm text-foreground leading-relaxed mb-3 font-medium">
				Thank you for 12k followers! You are all amazing! 💕
			</p>
			<div
				class="flex items-center justify-between text-xs text-muted-foreground"
			>
				<span>2d ago</span>
				<div class="flex items-center gap-3">
					<div class="flex items-center gap-1">
						<Heart class="w-3 h-3" />
						<span>423</span>
					</div>
					<div class="flex items-center gap-1">
						<MessageCircle class="w-3 h-3" />
						<span>78</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="flex items-center gap-2 mb-6">
		<Camera class="w-5 h-5 text-primary" />
		<h2 class="font-bold text-lg">Recent Posts</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<article
			class="bg-card border border-border rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
		>
			<div class="aspect-video bg-muted relative overflow-hidden">
				<div
					class="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl"
				>
					<span>🔥</span>
				</div>
				<div
					class="absolute top-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<div
						class="absolute top-0 left-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform -rotate-12"
					></div>
					<div
						class="absolute top-0 right-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform rotate-12"
					></div>
				</div>
			</div>
			<div class="p-5 space-y-3">
				<div class="flex items-center gap-2 text-xs text-muted-foreground">
					<span>Jan 15, 2025</span><span>•</span>
					<div class="flex items-center gap-1">
						<Clock class="w-3 h-3" />
						<span>5 min read</span>
					</div>
				</div>
				<h3
					class="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2"
				>
					My Journey Through Elden Ring: 100 Deaths Later
				</h3>
				<p class="text-sm text-muted-foreground line-clamp-2">
					What I learned from dying to the same boss 47 times in a row. Spoiler:
					patience is overrated.
				</p>
				<div
					class="flex items-center justify-between pt-2 border-t border-border"
				>
					<div class="flex items-center gap-4 text-sm text-muted-foreground">
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<Heart class="w-4 h-4" />
							<span>234</span>
						</button>
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<MessageCircle class="w-4 h-4" />
							<span>45</span>
						</button>
					</div>
					<PawPrint class="w-4 h-4 text-primary/40" />
				</div>
			</div>
		</article>

		<article
			class="bg-card border border-border rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
		>
			<div class="aspect-video bg-muted relative overflow-hidden">
				<div
					class="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl"
				>
					<span>🌙</span>
				</div>
				<div
					class="absolute top-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<div
						class="absolute top-0 left-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform -rotate-12"
					></div>
					<div
						class="absolute top-0 right-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform rotate-12"
					></div>
				</div>
			</div>
			<div class="p-5 space-y-3">
				<div class="flex items-center gap-2 text-xs text-muted-foreground">
					<span>Jan 10, 2025</span><span>•</span>
					<div class="flex items-center gap-1">
						<Clock class="w-3 h-3" />
						<span>4 min read</span>
					</div>
				</div>
				<h3
					class="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2"
				>
					Best Cozy Games for After Boss Rage
				</h3>
				<p class="text-sm text-muted-foreground line-clamp-2">
					When you need to decompress after losing all your souls, these games
					will heal your wounded gamer soul.
				</p>
				<div
					class="flex items-center justify-between pt-2 border-t border-border"
				>
					<div class="flex items-center gap-4 text-sm text-muted-foreground">
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<Heart class="w-4 h-4" />
							<span>187</span>
						</button>
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<MessageCircle class="w-4 h-4" />
							<span>32</span>
						</button>
					</div>
					<PawPrint class="w-4 h-4 text-primary/40" />
				</div>
			</div>
		</article>

		<article
			class="bg-card border border-border rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
		>
			<div class="aspect-video bg-muted relative overflow-hidden">
				<div
					class="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl"
				>
					<span>🎮</span>
				</div>
				<div
					class="absolute top-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<div
						class="absolute top-0 left-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform -rotate-12"
					></div>
					<div
						class="absolute top-0 right-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform rotate-12"
					></div>
				</div>
			</div>
			<div class="p-5 space-y-3">
				<div class="flex items-center gap-2 text-xs text-muted-foreground">
					<span>Jan 5, 2025</span><span>•</span>
					<div class="flex items-center gap-1">
						<Clock class="w-3 h-3" />
						<span>7 min read</span>
					</div>
				</div>
				<h3
					class="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2"
				>
					Building the Perfect Streaming Setup (Kawaii Edition)
				</h3>
				<p class="text-sm text-muted-foreground line-clamp-2">
					How I turned my gaming corner into a sakura-themed streaming sanctuary
					complete with cat decorations.
				</p>
				<div
					class="flex items-center justify-between pt-2 border-t border-border"
				>
					<div class="flex items-center gap-4 text-sm text-muted-foreground">
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<Heart class="w-4 h-4" />
							<span>456</span>
						</button>
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<MessageCircle class="w-4 h-4" />
							<span>89</span>
						</button>
					</div>
					<PawPrint class="w-4 h-4 text-primary/40" />
				</div>
			</div>
		</article>

		<article
			class="bg-card border border-border rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
		>
			<div class="aspect-video bg-muted relative overflow-hidden">
				<div
					class="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl"
				>
					<span>☕</span>
				</div>
				<div
					class="absolute top-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<div
						class="absolute top-0 left-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform -rotate-12"
					></div>
					<div
						class="absolute top-0 right-4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary/50 transform rotate-12"
					></div>
				</div>
			</div>
			<div class="p-5 space-y-3">
				<div class="flex items-center gap-2 text-xs text-muted-foreground">
					<span>Dec 28, 2024</span><span>•</span>
					<div class="flex items-center gap-1">
						<Clock class="w-3 h-3" />
						<span>6 min read</span>
					</div>
				</div>
				<h3
					class="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2"
				>
					Why Souls-like Games Are Actually Cozy
				</h3>
				<p class="text-sm text-muted-foreground line-clamp-2">
					Hear me out... there is something deeply comforting about a game that
					respects your skill growth.
				</p>
				<div
					class="flex items-center justify-between pt-2 border-t border-border"
				>
					<div class="flex items-center gap-4 text-sm text-muted-foreground">
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<Heart class="w-4 h-4" />
							<span>312</span>
						</button>
						<button
							class="flex items-center gap-1 hover:text-primary transition-colors"
						>
							<MessageCircle class="w-4 h-4" />
							<span>67</span>
						</button>
					</div>
					<PawPrint class="w-4 h-4 text-primary/40" />
				</div>
			</div>
		</article>
	</div>
</section>

<section
	class="bg-card border border-border rounded-3xl p-8 text-center relative overflow-hidden"
>
	<div
		class="absolute -top-3 left-8 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary transform -rotate-12"
	></div>
	<div
		class="absolute -top-3 right-8 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-primary transform rotate-12"
	></div>
	<h3 class="text-xl font-bold mb-2">Join the Neko Newsletter</h3>
	<p class="text-muted-foreground mb-6 text-sm">
		Get weekly updates on streams, new content, and exclusive cat pics! 🐱
	</p>
	<div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
		<input
			placeholder="your@email.com"
			class="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
			type="email"
		/>
		<button
			class="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
		>
			Subscribe ✨
		</button>
	</div>
</section>
