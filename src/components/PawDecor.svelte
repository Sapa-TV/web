<script lang="ts">
	interface Paw {
		position: string;
		size: string;
		rotation: string;
		translate: string;
	}

	const paws: Paw[] = [
		{
			position: "fixed top-4 left-4",
			size: "w-8 h-8",
			rotation: "-11.3317deg",
			translate: "translateY(-5.86928px)",
		},
		{
			position: "fixed top-4 right-4",
			size: "w-8 h-8",
			rotation: "10.0055deg",
			translate: "translateY(-7.99119px)",
		},
		{
			position: "fixed bottom-20 left-4 hidden md:block",
			size: "w-6 h-6",
			rotation: "-24.0017deg",
			translate: "translateY(6.40271px)",
		},
		{
			position: "fixed bottom-20 right-4 hidden md:block",
			size: "w-6 h-6",
			rotation: "21.3317deg",
			translate: "translateY(2.13072px)",
		},
	];
</script>

{#each paws as paw, i (i)}
	<div
		class="{paw.position} text-primary/30 z-10"
		style="transform: {paw.translate} rotate({paw.rotation})"
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
			class="{paw.size} text-primary"
			aria-hidden="true"
		>
			<circle cx="11" cy="4" r="2"></circle>
			<circle cx="18" cy="8" r="2"></circle>
			<circle cx="20" cy="16" r="2"></circle>
			<path
				d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
			></path>
		</svg>
	</div>
{/each}
