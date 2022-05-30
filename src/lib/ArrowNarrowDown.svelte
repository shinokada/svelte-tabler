<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'arrow narrow down';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/arrow-narrow-down</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<line x1="12" y1="5" x2="12" y2="19" />
	<line x1="16" y1="15" x2="12" y2="19" />
	<line x1="8" y1="15" x2="12" y2="19" />
</svg>
