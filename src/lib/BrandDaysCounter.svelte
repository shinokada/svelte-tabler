<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'brand days counter';
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
  <path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
  <path d="M13 21h8v-7" />
  <path d="M12 8v4l3 3" />
</svg>
