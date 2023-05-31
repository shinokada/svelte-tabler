<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'circle dotted';
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
  <path d="M7.5 4.21l0 .01" />
  <path d="M4.21 7.5l0 .01" />
  <path d="M3 12l0 .01" />
  <path d="M4.21 16.5l0 .01" />
  <path d="M7.5 19.79l0 .01" />
  <path d="M12 21l0 .01" />
  <path d="M16.5 19.79l0 .01" />
  <path d="M19.79 16.5l0 .01" />
  <path d="M21 12l0 .01" />
  <path d="M19.79 7.5l0 .01" />
  <path d="M16.5 4.21l0 .01" />
  <path d="M12 3l0 .01" />
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
