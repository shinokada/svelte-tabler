<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'ce';
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
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11 4a8 8 0 1 0 0 16" />
  <path d="M20 4a8 8 0 1 0 0 16" />
  <path d="M12 12l8 0" />
</svg>
