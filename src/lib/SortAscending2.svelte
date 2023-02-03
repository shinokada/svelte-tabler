<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'sort ascending 2';
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
  <path d="M14 9l3 -3l3 3" />
  <path
    d="M5 5m0 .5a0.5 .5 0 0 1 .5 -.5h4a0.5 .5 0 0 1 .5 .5v4a0.5 .5 0 0 1 -.5 .5h-4a0.5 .5 0 0 1 -.5 -.5z"
  />
  <path
    d="M5 14m0 .5a0.5 .5 0 0 1 .5 -.5h4a0.5 .5 0 0 1 .5 .5v4a0.5 .5 0 0 1 -.5 .5h-4a0.5 .5 0 0 1 -.5 -.5z"
  />
  <path d="M17 6v12" />
</svg>
