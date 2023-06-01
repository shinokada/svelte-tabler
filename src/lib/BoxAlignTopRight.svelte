<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'box align top right';
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
  <path d="M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1z" />
  <path d="M20 15.01v-.01" />
  <path d="M20 20.01v-.01" />
  <path d="M15 20.01v-.01" />
  <path d="M9 20.01v-.01" />
  <path d="M9 4.01v-.01" />
  <path d="M4 20.01v-.01" />
  <path d="M4 15.01v-.01" />
  <path d="M4 9.01v-.01" />
  <path d="M4 4.01v-.01" />
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
