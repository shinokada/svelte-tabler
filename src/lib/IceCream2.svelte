<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'ice cream 2';
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
  <path d="M17.657 11a6 6 0 1 0 -11.315 0" />
  <path d="M6.342 11l5.658 11l5.657 -11z" />
</svg>
