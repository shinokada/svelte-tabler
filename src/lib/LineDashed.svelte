<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'line dashed';
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
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12h2" />
  <path d="M17 12h2" />
  <path d="M11 12h2" />
</svg>
