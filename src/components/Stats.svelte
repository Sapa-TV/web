<script lang="ts">
	interface Stat {
		icon: string;
		value: string;
		label: string;
	}

	const stats: Stat[] = [
		{ icon: "users", value: "12.4k", label: "Followers" },
		{ icon: "heart", value: "847", label: "Subscribers" },
		{ icon: "calendar", value: "156", label: "Streams" },
	];
</script>

<div class="grid grid-cols-3 gap-4 max-w-lg mx-auto">
	{#each stats as stat, i (i)}
		<div
			class="relative bg-card border border-border rounded-3xl shadow-lg p-6 text-center py-4"
		>
			{#if stat.icon === "users"}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-6 h-6 text-primary mx-auto mb-2"
					aria-hidden="true"
				>
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
					<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
					<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
					<circle cx="9" cy="7" r="4"></circle>
				</svg>
			{:else if stat.icon === "heart"}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-6 h-6 text-primary mx-auto mb-2"
					aria-hidden="true"
				>
					<path
						d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
					></path>
				</svg>
			{:else if stat.icon === "calendar"}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-6 h-6 text-primary mx-auto mb-2"
					aria-hidden="true"
				>
					<path d="M8 2v4"></path>
					<path d="M16 2v4"></path>
					<rect width="18" height="18" x="3" y="4" rx="2"></rect>
					<path d="M3 10h18"></path>
				</svg>
			{/if}
			<div class="text-2xl font-bold text-foreground">{stat.value}</div>
			<div class="text-xs text-muted-foreground">{stat.label}</div>
		</div>
	{/each}
</div>
