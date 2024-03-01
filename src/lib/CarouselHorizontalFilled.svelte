<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'carousel horizontal filled';
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
    d="M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
    stroke-width="0"
    fill="currentColor"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'carousel horizontal filled';
-->
