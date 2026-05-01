<script lang="ts">
	import PawPrintIcon from "~icons/lucide/paw-print";

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
		class="paw-print {paw.position} text-primary/30 z-10"
		style="transform: {paw.translate} rotate({paw.rotation})"
	>
		<PawPrintIcon class="{paw.size} text-primary" />
	</div>
{/each}

<style>
	.paw-print {
		opacity: 0.5;
		animation: paw 1.5s ease-in-out infinite;
	}
	@keyframes paw {
		0% {
			transform: translateY(0) rotate(0);
			opacity: 0.3;
		}
		50% {
			transform: translateY(5px) rotate(10deg);
			opacity: 0.6;
		}
		100% {
			transform: translateY(0) rotate(0);
			opacity: 0.3;
		}
	}
</style>
