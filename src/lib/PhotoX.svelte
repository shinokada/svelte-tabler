<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'photo x';
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
  <path d="M15 8h.01" />
  <path d="M13 20h-6a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6" />
  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l2.5 2.5" />
  <path d="M21.5 21.5l-5 -5" />
  <path d="M16.5 21.5l5 -5" />
</svg>
