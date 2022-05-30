<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'dialpad off';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/dialpad-off</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M7 7h-4v-4" />
	<path d="M17 3h4v4h-4z" />
	<path d="M10 6v-3h4v4h-3" />
	<path d="M3 10h4v4h-4z" />
	<path d="M17 13v-3h4v4h-3" />
	<path d="M14 14h-4v-4" />
	<path d="M10 17h4v4h-4z" />
	<path d="M3 3l18 18" />
</svg>
