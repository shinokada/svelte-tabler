<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'pilcrow';
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
  <path d="M13 4v16" />
  <path d="M17 4v16" />
  <path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5" />
</svg>
