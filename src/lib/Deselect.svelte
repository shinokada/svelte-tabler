<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'deselect';
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
  <path d="M12 8h3a1 1 0 0 1 1 1v3" />
  <path d="M16 16h-7a1 1 0 0 1 -1 -1v-7" />
  <path d="M12 20v.01" />
  <path d="M16 20v.01" />
  <path d="M8 20v.01" />
  <path d="M4 20v.01" />
  <path d="M4 16v.01" />
  <path d="M4 12v.01" />
  <path d="M4 8v.01" />
  <path d="M8 4v.01" />
  <path d="M12 4v.01" />
  <path d="M16 4v.01" />
  <path d="M20 4v.01" />
  <path d="M20 8v.01" />
  <path d="M20 12v.01" />
  <path d="M20 16v.01" />
  <path d="M3 3l18 18" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'deselect';
-->
