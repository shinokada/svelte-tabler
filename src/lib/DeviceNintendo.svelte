<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'device nintendo';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/device-nintendo</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" />
	<path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" />
	<circle cx="17.5" cy="15.5" r="1" fill="currentColor" />
	<circle cx="6.5" cy="8.5" r="1" fill="currentColor" />
</svg>
