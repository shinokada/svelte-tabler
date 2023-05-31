<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'topology full hierarchy';
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
  <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M6 8v8" />
  <path d="M18 16v-8" />
  <path d="M8 6h8" />
  <path d="M16 18h-8" />
  <path d="M7.5 7.5l3 3" />
  <path d="M13.5 13.5l3 3" />
  <path d="M16.5 7.5l-3 3" />
  <path d="M10.5 13.5l-3 3" />
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
