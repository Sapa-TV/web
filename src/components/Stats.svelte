<script lang="ts">
	import CalendarIcon from "~icons/lucide/calendar";
	import HeartIcon from "~icons/lucide/heart";
	import UsersIcon from "~icons/lucide/users";

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
				<UsersIcon class="w-6 h-6 text-primary mx-auto mb-2" />
			{:else if stat.icon === "heart"}
				<HeartIcon class="w-6 h-6 text-primary mx-auto mb-2" />
			{:else if stat.icon === "calendar"}
				<CalendarIcon class="w-6 h-6 text-primary mx-auto mb-2" />
			{/if}
			<div class="text-2xl font-bold text-foreground">{stat.value}</div>
			<div class="text-xs text-muted-foreground">{stat.label}</div>
		</div>
	{/each}
</div>
