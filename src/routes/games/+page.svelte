<script lang="ts">
	import GameList from "$cmp/GameList.svelte";
	import SectionTitle from "$cmp/SectionTitle.svelte";
	import type { Game } from "$lib/types";

	const inProgressGames: Game[] = [
		{
			id: "1",
			title: "Elden Ring: Shadow of the Erdtree",
			emoji: "⚔️",
			progress: 65,
		},
		{ id: "2", title: "Armored Core VI", emoji: "🤖", progress: 30 },
	];

	const completedGames: Game[] = [
		{ id: "3", title: "Sekiro", emoji: "🐺", completion: "🏅 100%" },
		{ id: "4", title: "Hollow Knight", emoji: "🌿", completion: "🥇 112%" },
		{ id: "5", title: "Bloodborne", emoji: "🗡️", completion: "🏅 Platinum" },
	];

	const queuedGames: Game[] = [
		{
			id: "6",
			title: "Black Myth: Wukong",
			emoji: "🦝",
			completion: "Action RPG",
		},
		{ id: "7", title: "FF VII Rebirth", emoji: "🗼", completion: "J-RPG" },
	];
</script>

<SectionTitle title="Библиотека " highlight="Игр" />

<GameList title="В процессе" games={inProgressGames} />
<GameList title="Пройденные" games={completedGames} />
<GameList title="Очередь" games={queuedGames} />
