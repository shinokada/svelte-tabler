<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'prison';
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
  <path d="M18 4v16" />
  <path d="M14 4v16" />
  <path d="M6 4v5" />
  <path d="M6 15v5" />
  <path d="M10 4v5" />
  <path d="M11 9h-6v6h6z" />
  <path d="M10 15v5" />
  <path d="M8 12h-.01" />
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
