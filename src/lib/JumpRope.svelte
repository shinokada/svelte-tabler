<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'jump rope';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/jump-rope</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
	<rect x="16" y="3" width="4" height="7" rx="2" />
	<rect x="4" y="14" width="4" height="7" rx="2" />
</svg>
