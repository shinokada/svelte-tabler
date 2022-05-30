<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow ramp right';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/arrow-ramp-right</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <line x1="7" y1="3" x2="7" y2="11.707" />
  <path d="M11 7l-4 -4l-4 4" />
  <path d="M17 14l4 -4l-4 -4" />
  <path d="M7 21a11 11 0 0 1 11 -11h3" />
</svg>
