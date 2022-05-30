<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'rectangle vertical';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/rectangle-vertical</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <rect x="5" y="3" width="14" height="18" rx="2" />
</svg>
