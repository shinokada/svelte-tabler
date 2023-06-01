<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'tournament';
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
  <path d="M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3" />
  <path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2" />
  <path d="M14 10h4" />
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
