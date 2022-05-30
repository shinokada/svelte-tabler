<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'layers intersect';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/layers-intersect</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<rect x="8" y="4" width="12" height="12" rx="2" />
	<rect x="4" y="8" width="12" height="12" rx="2" />
</svg>
