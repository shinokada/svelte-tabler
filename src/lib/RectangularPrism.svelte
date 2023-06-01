<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'rectangular prism';
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
  <path
    d="M21 14.008v-5.018a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-10 5.008c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l10 -5.008c.619 -.355 1 -1.01 1 -1.718z"
  />
  <path d="M9 21v-7.5" />
  <path d="M9 13.5l11.5 -5.5" />
  <path d="M3.5 11l5.5 2.5" />
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
