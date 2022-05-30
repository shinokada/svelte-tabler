<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'player skip forward';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/player-skip-forward</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M4 5v14l12 -7z" />
	<line x1="20" y1="5" x2="20" y2="19" />
</svg>
