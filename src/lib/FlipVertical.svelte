<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'flip vertical';
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
  <path d="M12 3l0 18" />
  <path d="M16 7l0 10l5 0l-5 -10" />
  <path d="M8 7l0 10l-5 0l5 -10" />
</svg>
