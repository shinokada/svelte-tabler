<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = '2fa';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/2fa</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
	<path d="M10 16v-8h4" />
	<line x1="10" y1="12" x2="13" y2="12" />
	<path d="M17 16v-6a2 2 0 0 1 4 0v6" />
	<line x1="17" y1="13" x2="21" y2="13" />
</svg>
