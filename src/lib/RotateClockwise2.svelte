<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'rotate clockwise 2';
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
  <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
  <path d="M5.63 7.16l0 .01" />
  <path d="M4.06 11l0 .01" />
  <path d="M4.63 15.1l0 .01" />
  <path d="M7.16 18.37l0 .01" />
  <path d="M11 19.94l0 .01" />
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
