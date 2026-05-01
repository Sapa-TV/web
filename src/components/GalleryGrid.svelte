<script lang="ts">
	import type { GalleryItem as GalleryItemType } from "$lib/types";
	import GalleryItem from "./GalleryItem.svelte";

	let {
		items,
		columns = 4,
		itemSize = 200,
	}: {
		items: GalleryItemType[];
		columns?: number;
		itemSize?: number;
	} = $props();
</script>

<div
	class="gallery-grid"
	style="--columns: {columns}; --item-size: {itemSize}px"
>
	{#each items as item (item.id)}
		<GalleryItem emoji={item.emoji} size={itemSize} />
	{/each}
</div>

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(var(--columns, 4), 1fr);
		gap: 1rem;
		margin-top: 2rem;
	}

	@media (max-width: 768px) {
		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
