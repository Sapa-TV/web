<script lang="ts">
	interface Props {
		title: string;
		body: string;
		icon?: string;
		onclose: () => void;
	}

	let { title, body, icon = "/avatar.jpg", onclose }: Props = $props();

	let visible = $state(true);
	let timeout: ReturnType<typeof setTimeout> | undefined;

	const TOAST_TIMEOUT_MS = 10000;

	$effect(() => {
		timeout = setTimeout(() => {
			close();
		}, TOAST_TIMEOUT_MS);

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	});

	function close() {
		visible = false;
		onclose();
	}
</script>

{#if visible}
	<div class="push-toast" role="alert">
		<div class="content">
			{#if icon}
				<img src={icon} alt="" class="icon" />
			{/if}
			<div class="text">
				<div class="title">{title}</div>
				<div class="body">{body}</div>
			</div>
		</div>
		<button class="close" onclick={close} aria-label="Закрыть">×</button>
	</div>
{/if}

<style>
	.push-toast {
		position: fixed;
		top: 16px;
		right: 16px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		padding: 12px 16px;
		background: #1a1a2e;
		color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		z-index: 9999;
		max-width: 320px;
		font-family: inherit;
	}

	.content {
		display: flex;
		gap: 12px;
		flex: 1;
	}

	.icon {
		width: 40px;
		height: 40px;
		border-radius: 4px;
		object-fit: cover;
		flex-shrink: 0;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.title {
		font-weight: 600;
		font-size: 14px;
	}

	.body {
		font-size: 13px;
		color: #ccc;
	}

	.close {
		background: none;
		border: none;
		color: #999;
		font-size: 18px;
		cursor: pointer;
		padding: 0;
		line-height: 1;
		flex-shrink: 0;
	}

	.close:hover {
		color: #fff;
	}
</style>
