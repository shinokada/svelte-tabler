<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'circle 4';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={$$props.class}
	width={size}
	height={size}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
	stroke-width="2"
	stroke={color}
	fill="none"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<desc>Download more icon variants from https://tabler-icons.io/i/circle-4</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M13 16v-8l-4 6h5" />
	<circle cx="12" cy="12" r="9" />
</svg>
