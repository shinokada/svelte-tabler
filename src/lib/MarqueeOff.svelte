<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'marquee off';
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
  <path d="M4 6c0 -.556 .227 -1.059 .593 -1.421" />
  <path d="M9 4h1.5" />
  <path d="M13.5 4h1.5" />
  <path d="M18 4a2 2 0 0 1 2 2" />
  <path d="M20 9v1.5" />
  <path d="M20 13.5v1.5" />
  <path d="M19.402 19.426a1.993 1.993 0 0 1 -1.402 .574" />
  <path d="M15 20h-1.5" />
  <path d="M10.5 20h-1.5" />
  <path d="M6 20a2 2 0 0 1 -2 -2" />
  <path d="M4 15v-1.5" />
  <path d="M4 10.5v-1.5" />
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
@prop export let ariaLabel = 'marquee off';
-->
