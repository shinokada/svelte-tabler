<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'trending down';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/trending-down</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<polyline points="3 7 9 13 13 9 21 17" />
	<polyline points="21 10 21 17 14 17" />
</svg>
