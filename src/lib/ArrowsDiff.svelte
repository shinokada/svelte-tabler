<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'arrows diff';
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
  <path d="M11 16h10" />
  <path d="M11 16l4 4" />
  <path d="M11 16l4 -4" />
  <path d="M13 8h-10" />
  <path d="M13 8l-4 4" />
  <path d="M13 8l-4 -4" />
</svg>
