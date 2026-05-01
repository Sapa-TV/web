<script lang="ts">
</script>

<div class="live-badge">
	<span class="dot"></span>
	LIVE
</div>

<style>
	.live-badge {
		background: #ff0033;
		color: #fff;
		font-size: 0.7rem;
		font-weight: 800;
		padding: 0.15rem 0.4rem;
		border-radius: 3px;
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.dot {
		width: 6px;
		height: 6px;
		background: #fff;
		border-radius: 50%;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
