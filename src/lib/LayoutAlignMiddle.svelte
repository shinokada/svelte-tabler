<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'layout align middle';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/layout-align-middle</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<line x1="4" y1="12" x2="9" y2="12" />
	<line x1="15" y1="12" x2="20" y2="12" />
	<rect x="9" y="6" width="6" height="12" rx="2" />
</svg>
