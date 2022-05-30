<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'smoking';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/smoking</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <rect x="3" y="13" width="18" height="4" rx="1" />
  <line x1="8" y1="13" x2="8" y2="17" />
  <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
</svg>
