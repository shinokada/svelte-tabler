<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'pills';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/pills</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<circle cx="8" cy="8" r="5" />
	<circle cx="17" cy="17" r="4" />
	<path d="M4.5 4.5l7 7" />
	<path d="M19.5 14.5l-5 5" />
</svg>
