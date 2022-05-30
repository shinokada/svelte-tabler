<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'sort descending letters';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/sort-descending-letters</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
	<path d="M19 10h-4l4 -7h-4" />
	<path d="M4 15l3 3l3 -3" />
	<path d="M7 6v12" />
</svg>
