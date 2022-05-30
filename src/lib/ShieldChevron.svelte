<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'shield chevron';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/shield-chevron</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
	<path d="M4 14l8 -3l8 3" />
</svg>
