<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'view 360 off';
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
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path
    d="M8.335 8.388a19 19 0 0 0 -.335 3.612c0 4.97 1.79 9 4 9c1.622 0 3.018 -2.172 3.646 -5.294m.354 -3.706c0 -4.97 -1.79 -9 -4 -9c-1.035 0 -1.979 .885 -2.689 2.337"
  />
  <path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" />
  <path
    d="M8.32 8.349c-3.136 .625 -5.32 2.025 -5.32 3.651c0 2.21 4.03 4 9 4c1.286 0 2.51 -.12 3.616 -.336m3.059 -.98c1.445 -.711 2.325 -1.653 2.325 -2.684c0 -2.21 -4.03 -4 -9 -4"
  />
  <path d="M3 3l18 18" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'view 360 off';
-->
