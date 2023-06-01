<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'gift off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={$$props.class}
  width={size}
  height={size}
  {...$$restProps}
  {role}
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
  <path d="M12 8h8a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4m-4 0h-8a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h4" />
  <path d="M12 12v9" />
  <path d="M19 12v3m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
  <path
    d="M7.5 8a2.5 2.5 0 0 1 -2.457 -2.963m2.023 -2c.14 -.023 .286 -.037 .434 -.037c1.974 -.034 3.76 1.95 4.5 5c.74 -3.05 2.526 -5.034 4.5 -5a2.5 2.5 0 1 1 0 5"
  />
  <path d="M3 3l18 18" />
</svg>

<!--
@component
[Go to Document](https://svelte-tabler.codewithshin.com/)
## Props
@prop size = '16';
@prop role = 'img';
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
