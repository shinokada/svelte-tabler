<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'clock 2';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/clock-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <rect x="4" y="4" width="16" height="16" rx="1" />
  <path d="M12 7v5l3 3" />
  <path d="M4 12h1" />
  <path d="M19 12h1" />
  <path d="M12 19v1" />
</svg>
