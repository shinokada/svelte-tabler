<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'north star';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/north-star</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M3 12h18" />
	<path d="M12 21v-18" />
	<path d="M7.5 7.5l9 9" />
	<path d="M7.5 16.5l9 -9" />
</svg>
