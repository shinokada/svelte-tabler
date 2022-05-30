<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'brackets';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/brackets</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M8 4h-3v16h3" />
	<path d="M16 4h3v16h-3" />
</svg>
