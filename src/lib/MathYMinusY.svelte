<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'math y minus y';
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
  <path d="M2 9l3 5.063" />
  <path d="M8 9l-4.8 9" />
  <path d="M16 9l3 5.063" />
  <path d="M22 9l-4.8 9" />
  <path d="M10 12h4" />
</svg>
