<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'lock';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/lock</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <rect x="5" y="11" width="14" height="10" rx="2" />
  <circle cx="12" cy="16" r="1" />
  <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
</svg>
