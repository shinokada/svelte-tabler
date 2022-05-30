<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'grid pattern';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/grid-pattern</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<rect x="4" y="4" width="16" height="16" rx="2" />
	<path d="M10 8v8" />
	<path d="M14 8v8" />
	<path d="M8 10h8" />
	<path d="M8 14h8" />
</svg>
