<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'stack 2';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/stack-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <polyline points="12 4 4 8 12 12 20 8 12 4" />
  <polyline points="4 12 12 16 20 12" />
  <polyline points="4 16 12 20 20 16" />
</svg>
