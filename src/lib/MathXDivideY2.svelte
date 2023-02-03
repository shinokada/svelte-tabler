<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'math x divide y 2';
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
  <path d="M3 21l18 -18" />
  <path d="M15 14l3 4.5" />
  <path d="M21 14l-4.5 7" />
  <path d="M3 4l6 6" />
  <path d="M3 10l6 -6" />
</svg>
