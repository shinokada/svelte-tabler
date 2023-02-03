<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'brand comedy central';
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
  <path d="M5.343 17.657a8 8 0 1 0 0 -11.314" />
  <path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
</svg>
