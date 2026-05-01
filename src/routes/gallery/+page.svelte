<script lang="ts">
	import GalleryGrid from "$cmp/GalleryGrid.svelte";
	import SectionTitle from "$cmp/SectionTitle.svelte";
	import type { GalleryItem } from "$lib/types";

	const columns = 4;
	const itemSize = 180;

	const galleryItems: GalleryItem[] = [
		{ id: "1", emoji: "🌸" },
		{ id: "2", emoji: "🏯" },
		{ id: "3", emoji: "⚔️" },
		{ id: "4", emoji: "🍥" },
		{ id: "5", emoji: "🐉" },
		{ id: "6", emoji: "👻" },
	];
</script>

<SectionTitle title="Галерея" />

<GalleryGrid items={galleryItems} {columns} {itemSize} />
