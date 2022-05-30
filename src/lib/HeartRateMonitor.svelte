<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'heart rate monitor';
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
  <desc>Download more icon variants from https://tabler-icons.io/i/heart-rate-monitor</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <rect x="3" y="4" width="18" height="12" rx="1" />
  <path d="M7 20h10" />
  <path d="M9 16v4" />
  <path d="M15 16v4" />
  <path d="M7 10h2l2 3l2 -6l1 3h3" />
</svg>
