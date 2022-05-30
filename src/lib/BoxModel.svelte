<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'box model';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/box-model</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 8h8v8h-8z" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M16 16l3.3 3.3" />
  <path d="M16 8l3.3 -3.3" />
  <path d="M8 8l-3.3 -3.3" />
  <path d="M8 16l-3.3 3.3" />
</svg>
