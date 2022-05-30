<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'logout';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/logout</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
	<path d="M7 12h14l-3 -3m0 6l3 -3" />
</svg>
