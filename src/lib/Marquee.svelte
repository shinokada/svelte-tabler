<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'marquee';
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
  <path
    d="M4 6a2 2 0 0 1 2 -2m3 0h1.5m3 0h1.5m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3v1.5m0 3a2 2 0 0 1 -2 2m-3 0h-1.5m-3 0h-1.5m-3 0a2 2 0 0 1 -2 -2m0 -3v-1.5m0 -3v-1.5m0 -3"
  />
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
