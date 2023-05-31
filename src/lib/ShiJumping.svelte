<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'shi jumping';
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
  <path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M17 17.5l-5 -4.5v-6l5 4" />
  <path d="M7 17.5l5 -4.5" />
  <path d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657" />
  <path d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657" />
  <path d="M7 11l5 -4" />
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
