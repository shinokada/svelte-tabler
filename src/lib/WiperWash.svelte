<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'wiper wash';
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
  <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
  <path d="M12 20l0 -14" />
  <path d="M4 6a4 4 0 0 1 .4 -1.8" />
  <path d="M7 2.1a4 4 0 0 1 2 0" />
  <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
  <path d="M12 6a4 4 0 0 1 .4 -1.8" />
  <path d="M15 2.1a4 4 0 0 1 2 0" />
  <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'wiper wash';
-->
