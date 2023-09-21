<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'brand deezer';
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
  <path d="M3 16.5h2v.5h-2z" />
  <path d="M8 16.5h2.5v.5h-2.5z" />
  <path d="M16 17h-2.5v-.5h2.5z" />
  <path d="M21.5 17h-2.5v-.5h2.5z" />
  <path d="M21.5 13h-2.5v.5h2.5z" />
  <path d="M21.5 9.5h-2.5v.5h2.5z" />
  <path d="M21.5 6h-2.5v.5h2.5z" />
  <path d="M16 13h-2.5v.5h2.5z" />
  <path d="M8 13.5h2.5v-.5h-2.5z" />
  <path d="M8 9.5h2.5v.5h-2.5z" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'brand deezer';
-->
