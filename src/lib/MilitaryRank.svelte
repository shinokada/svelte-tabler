<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'military rank';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/military-rank</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M17 7v13h-10v-13l5 -3z" />
	<path d="M10 13l2 -1l2 1" />
	<path d="M10 17l2 -1l2 1" />
	<path d="M10 9l2 -1l2 1" />
</svg>
