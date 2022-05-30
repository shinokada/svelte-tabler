<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'circle 6';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/circle-6</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<circle cx="12" cy="14" r="2" />
	<path d="M14 10a2 2 0 1 0 -4 0v4" />
	<circle cx="12" cy="12" r="9" />
</svg>
