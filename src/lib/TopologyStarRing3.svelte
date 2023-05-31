<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'topology star ring 3';
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
  <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M6 12h4" />
  <path d="M14 12h4" />
  <path d="M15 7l-2 3" />
  <path d="M9 7l2 3" />
  <path d="M11 14l-2 3" />
  <path d="M13 14l2 3" />
  <path d="M10 5h4" />
  <path d="M10 19h4" />
  <path d="M17 17l2 -3" />
  <path d="M19 10l-2 -3" />
  <path d="M7 7l-2 3" />
  <path d="M5 14l2 3" />
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
