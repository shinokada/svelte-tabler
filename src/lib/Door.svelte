<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'door';
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
	<desc>Download more icon variants from https://tabler-icons.io/i/door</desc>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M14 12v.01" />
	<path d="M3 21h18" />
	<path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
</svg>
