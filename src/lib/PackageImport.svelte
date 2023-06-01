<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'package import';
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
  <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
  <path d="M12 12l8 -4.5" />
  <path d="M12 12v9" />
  <path d="M12 12l-8 -4.5" />
  <path d="M22 18h-7" />
  <path d="M18 15l-3 3l3 3" />
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
