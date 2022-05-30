<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'chevron right';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/chevron-right</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <polyline points="9 6 15 12 9 18" />
</svg>
