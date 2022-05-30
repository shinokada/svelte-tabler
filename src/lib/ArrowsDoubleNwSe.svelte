<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'arrows double nw se';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/arrows-double-nw-se</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M14 21l-11 -11" />
  <path d="M3 14v-4h4" />
  <path d="M17 14h4v-4" />
  <line x1="10" y1="3" x2="21" y2="14" />
</svg>
