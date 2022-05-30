<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'soup';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/soup</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 19h18" />
  <path d="M3 11h18a8 8 0 0 1 -8 8h-2a8 8 0 0 1 -8 -8z" />
  <path d="M9 8v-3" />
  <path d="M12 5v3" />
  <path d="M15 5v3" />
</svg>
