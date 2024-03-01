<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'drone';
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
  <path d="M10 10h4v4h-4z" />
  <path d="M10 10l-3.5 -3.5" />
  <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
  <path d="M14 10l3.5 -3.5" />
  <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
  <path d="M14 14l3.5 3.5" />
  <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
  <path d="M10 14l-3.5 3.5" />
  <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'drone';
-->
