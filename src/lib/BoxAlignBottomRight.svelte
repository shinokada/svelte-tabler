<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'box align bottom right';
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
  <path d="M19 13h-5a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1z" />
  <path d="M20 9v.01" />
  <path d="M20 4v.01" />
  <path d="M15 4v.01" />
  <path d="M9 4v.01" />
  <path d="M9 20v.01" />
  <path d="M4 4v.01" />
  <path d="M4 9v.01" />
  <path d="M4 15v.01" />
  <path d="M4 20v.01" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'box align bottom right';
-->
