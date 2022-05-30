<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'device mobile vibration';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/device-mobile-vibration</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<rect x="3" y="3" width="12" height="18" rx="2" />
	<line x1="8" y1="4" x2="10" y2="4" />
	<line x1="9" y1="17" x2="9" y2="17.01" />
	<path d="M21 6l-2 3l2 3l-2 3l2 3" />
</svg>
