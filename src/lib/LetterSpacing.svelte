<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'letter spacing';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/letter-spacing</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
	<path d="M13 4l3 8l3 -8" />
	<path d="M5 18h14" />
	<path d="M17 20l2 -2l-2 -2" />
	<path d="M7 16l-2 2l2 2" />
</svg>
