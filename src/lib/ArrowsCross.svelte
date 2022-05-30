<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'arrows cross';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/arrows-cross</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M16 4h4v4" />
	<path d="M15 9l5 -5" />
	<path d="M4 20l5 -5" />
	<path d="M16 20h4v-4" />
	<path d="M4 4l16 16" />
</svg>
