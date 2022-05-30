<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'layout bottombar';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/layout-bottombar</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<rect x="4" y="4" width="16" height="16" rx="2" />
	<line x1="4" y1="15" x2="20" y2="15" />
</svg>
