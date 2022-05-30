<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'cursor text';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/cursor-text</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 12h4" />
  <path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3" />
  <path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3" />
</svg>
