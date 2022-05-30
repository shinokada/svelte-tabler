<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'currency renminbi';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/currency-renminbi</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M15 9v8a2 2 0 1 0 4 0" />
	<path d="M19 9h-14" />
	<path d="M19 5h-14" />
	<path d="M9 9v4c0 2.5 -.667 4 -2 6" />
</svg>
