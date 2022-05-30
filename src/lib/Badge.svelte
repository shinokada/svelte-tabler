<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'badge';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/badge</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M17 17v-13l-5 3l-5 -3v13l5 3z" />
</svg>
