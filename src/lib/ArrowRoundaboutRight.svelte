<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow roundabout right';
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
  <path d="M21 9h-8a5 5 0 1 0 -5 5v7" />
  <path d="M17 5l4 4l-4 4" />
</svg>
