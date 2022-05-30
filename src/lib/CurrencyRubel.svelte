<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'currency rubel';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/currency-rubel</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M8 19v-14h6a3 3 0 0 1 0 6h-8" />
	<path d="M14 15h-8" />
</svg>
