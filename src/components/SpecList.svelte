<script lang="ts">
	import type { Spec } from "$lib/types";

	let {
		specs,
	}: {
		specs: Spec[];
	} = $props();
</script>

<ul class="spec-list">
	{#each specs as spec (spec.label)}
		<li class="spec-item">
			<span class="spec-icon">{spec.icon}</span>
			<span class="spec-label">{spec.label}</span>
			<span class="spec-value">{spec.value}</span>
		</li>
	{/each}
</ul>

<style>
	.spec-list {
		list-style: none;
		display: grid;
		gap: 0.8rem;
		margin-top: 1.5rem;
	}

	.spec-item {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		background: var(--bg-card);
		padding: 0.8rem;
		border-radius: 8px;
		border: 1px solid var(--border);
	}

	.spec-icon {
		font-size: 1.2rem;
		width: 24px;
		text-align: center;
	}

	.spec-label {
		color: var(--text-muted);
	}

	.spec-value {
		font-weight: 700;
		margin-left: auto;
	}
</style>
