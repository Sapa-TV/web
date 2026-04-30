<script lang="ts">
	interface Petal {
		left: string;
		fontSize: string;
		opacity: number;
		transform: string;
	}

	const petals: Petal[] = [
		{
			left: "46.5139%",
			fontSize: "10.1856px",
			opacity: 0,
			transform:
				"translateX(9.78983px) translateY(103.269vh) rotate(675.946deg)",
		},
		{
			left: "5.77138%",
			fontSize: "8.65601px",
			opacity: 0,
			transform:
				"translateX(29.1938px) translateY(27.9434vh) rotate(182.902deg)",
		},
		{
			left: "34.5637%",
			fontSize: "13.3128px",
			opacity: 0,
			transform:
				"translateX(23.9397px) translateY(21.9447vh) rotate(143.638deg)",
		},
		{
			left: "89.3834%",
			fontSize: "15.3155px",
			opacity: 0,
			transform:
				"translateX(28.1913px) translateY(25.8421vh) rotate(169.148deg)",
		},
		{
			left: "54.8067%",
			fontSize: "13.8276px",
			opacity: 0,
			transform:
				"translateX(16.1429px) translateY(14.7976vh) rotate(96.8573deg)",
		},
		{
			left: "50.5615%",
			fontSize: "8.57423px",
			opacity: 0,
			transform:
				"translateX(12.9714px) translateY(70.1119vh) rotate(458.914deg)",
		},
		{
			left: "83.2751%",
			fontSize: "9.00147px",
			opacity: 0,
			transform:
				"translateX(14.9624px) translateY(99.7134vh) rotate(652.669deg)",
		},
		{
			left: "44.9472%",
			fontSize: "13.6414px",
			opacity: 0,
			transform:
				"translateX(6.00784px) translateY(105.87vh) rotate(692.965deg)",
		},
		{
			left: "0.599107%",
			fontSize: "15.1589px",
			opacity: 0,
			transform:
				"translateX(17.1187px) translateY(98.2309vh) rotate(642.966deg)",
		},
		{
			left: "58.4517%",
			fontSize: "12.6515px",
			opacity: 0,
			transform:
				"translateX(12.5234px) translateY(11.4798vh) rotate(75.1405deg)",
		},
		{
			left: "52.9126%",
			fontSize: "9.77383px",
			opacity: 0,
			transform:
				"translateX(26.2374px) translateY(29.5694vh) rotate(193.545deg)",
		},
		{
			left: "46.8254%",
			fontSize: "15.152px",
			opacity: 0,
			transform:
				"translateX(12.9878px) translateY(11.9055vh) rotate(77.927deg)",
		},
		{
			left: "81.1458%",
			fontSize: "12.7035px",
			opacity: 0,
			transform:
				"translateX(11.254px) translateY(37.8103vh) rotate(247.485deg)",
		},
		{
			left: "25.9288%",
			fontSize: "9.90754px",
			opacity: 0,
			transform:
				"translateX(18.7988px) translateY(33.6606vh) rotate(220.324deg)",
		},
		{
			left: "90.123%",
			fontSize: "14.0078px",
			opacity: 0,
			transform:
				"translateX(18.7239px) translateY(72.7484vh) rotate(476.172deg)",
		},
	];
</script>

<div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
	{#each petals as petal, i (i)}
		<div
			class="absolute text-primary/60"
			style="left: {petal.left}; font-size: {petal.fontSize}; opacity: {petal.opacity}; transform: {petal.transform}"
		>
			🌸
		</div>
	{/each}
</div>
