<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'forms';
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
  <path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" />
  <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
  <path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" />
  <path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" />
  <path d="M17 12h.01" />
  <path d="M13 12h.01" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'forms';
-->
