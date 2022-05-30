<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'slice';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/slice</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
</svg>
