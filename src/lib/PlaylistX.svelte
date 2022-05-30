<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'playlist x';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/playlist-x</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M19 8h-14" />
	<path d="M5 12h7" />
	<path d="M12 16h-7" />
	<path d="M16 14l4 4" />
	<path d="M20 14l-4 4" />
</svg>
