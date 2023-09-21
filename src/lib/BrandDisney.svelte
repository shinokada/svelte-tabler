<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'brand disney';
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
    d="M3.22 5.838c-1.307 -.15 -1.22 -.578 -1.22 -.794c0 -.216 .424 -1.044 4.34 -1.044c4.694 0 14.66 3.645 14.66 10.042s-8.71 4.931 -10.435 4.52c-1.724 -.412 -5.565 -2.256 -5.565 -4.174c0 -1.395 3.08 -2.388 6.715 -2.388c3.634 0 5.285 1.041 5.285 2c0 .5 -.074 1.229 -1 1.5"
  />
  <path d="M10.02 8a505.153 505.153 0 0 0 0 13" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'brand disney';
-->
