<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'crop';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/crop</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 5v10a1 1 0 0 0 1 1h10" />
  <path d="M5 8h10a1 1 0 0 1 1 1v10" />
</svg>
