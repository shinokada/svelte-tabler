<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'dashboard';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/dashboard</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<circle cx="12" cy="13" r="2" />
	<line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
	<path d="M6.4 20a9 9 0 1 1 11.2 0z" />
</svg>
