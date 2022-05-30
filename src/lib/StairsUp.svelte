<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'stairs up';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/stairs-up</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M4 20h4v-4h4v-4h4v-4h4" />
	<path d="M4 11l7 -7v4m-4 -4h4" />
</svg>
