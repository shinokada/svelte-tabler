<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'file off';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/file-off</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<line x1="3" y1="3" x2="21" y2="21" />
	<path d="M7 3h7l5 5v7m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
</svg>
