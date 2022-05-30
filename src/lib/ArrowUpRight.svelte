<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'arrow up right';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/arrow-up-right</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<line x1="17" y1="7" x2="7" y2="17" />
	<polyline points="8 7 17 7 17 16" />
</svg>
