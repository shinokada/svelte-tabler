<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'globe off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={$$props.class}
  width={size}
  height={size}
  {...$$restProps}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8.36 8.339a4 4 0 0 0 5.281 5.31m2 -1.98a4 4 0 0 0 -5.262 -5.325" />
  <path d="M6.75 16a8.015 8.015 0 0 0 9.799 .553m2.016 -2a8.015 8.015 0 0 0 -2.565 -11.555" />
  <path d="M12 18v4" />
  <path d="M8 22h8" />
  <path d="M3 3l18 18" />
</svg>

<!--
@component
[Go to Document](https://svelte-tabler.codewithshin.com/)
## Props
@prop size = '16';
@prop color = 'currentColor';
@prop ariaLabel = 'icon file name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
