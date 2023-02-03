<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow sharp turn right';
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
  <path d="M7 18v-11.31a0.7 .7 0 0 1 1.195 -.495l9.805 9.805" />
  <path d="M13 16h5v-5" />
</svg>
