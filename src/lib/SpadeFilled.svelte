<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'spade filled';
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
    d="M11.327 2.26a1395.065 1395.065 0 0 0 -4.923 4.504c-.626 .6 -1.212 1.21 -1.774 1.843a6.528 6.528 0 0 0 -.314 8.245l.14 .177c1.012 1.205 2.561 1.755 4.055 1.574l.246 -.037l-.706 2.118a1 1 0 0 0 .949 1.316h6l.118 -.007a1 1 0 0 0 .83 -1.31l-.688 -2.065l.104 .02c1.589 .25 3.262 -.387 4.32 -1.785a6.527 6.527 0 0 0 -.311 -8.243a31.787 31.787 0 0 0 -1.76 -1.83l-4.938 -4.518a1 1 0 0 0 -1.348 -.001z"
    stroke-width="0"
    fill="currentColor"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'spade filled';
-->
