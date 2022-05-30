<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'currency zloty';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/currency-zloty</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M12 18h-7l7 -7h-7" />
	<path d="M17 18v-13" />
	<path d="M14 14.5l6 -3.5" />
</svg>
