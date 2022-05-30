<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'arrows diagonal';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/arrows-diagonal</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <polyline points="16 4 20 4 20 8" />
  <line x1="14" y1="10" x2="20" y2="4" />
  <polyline points="8 20 4 20 4 16" />
  <line x1="4" y1="20" x2="10" y2="14" />
</svg>
