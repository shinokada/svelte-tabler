<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'gender agender';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/gender-agender</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<circle cx="12" cy="12" r="6" />
	<path d="M7 12h11" />
</svg>
