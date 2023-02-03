<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'flag 2 off';
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
  <path d="M5 14h9m4 0h1v-9h-10m-4 0v16" />
  <path d="M3 3l18 18" />
</svg>
