<script lang="ts">
	import AboutAvatar from "$cmp/AboutAvatar.svelte";
	import SectionTitle from "$cmp/SectionTitle.svelte";
	import SpecList from "$cmp/SpecList.svelte";
	import type { Spec } from "$lib/types";

	const avatarSize = 260;

	const specs: Spec[] = [
		{ icon: "🎮", label: "Console", value: "PS5" },
		{ icon: "💻", label: "PC", value: "RTX 4080" },
		{ icon: "🎤", label: "Mic", value: "SM7B" },
	];
</script>

<SectionTitle title="Кто такая " highlight="Sapa?" />

<div class="about-grid">
	<AboutAvatar emoji="🐱" size={avatarSize} />
	<div class="about-text">
		<h3>Никнейм: NekoSapa</h3>
		<p>
			Привет! Я стример, геймер и просто любитель всего милого и сложного
			одновременно. Мой путь начался с простых инди-игр, а теперь я пытаюсь
			пройти всё на уровне "No Hit".
		</p>
		<p>В свободное время рисую арт, пью матча-латте и общаюсь с вами в чате.</p>

		<h3>🖥️ Мой Арсенал</h3>
		<SpecList {specs} />
	</div>
</div>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 2.5rem;
		align-items: center;
		margin-top: 2rem;
	}

	.about-text h3 {
		font-size: 1.2rem;
		font-weight: 800;
	}

	.about-text p {
		color: var(--text-muted);
		margin: 0.8rem 0;
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
