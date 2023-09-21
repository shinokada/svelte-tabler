<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'bookmarks filled';
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
    d="M13 6h-6a3 3 0 0 0 -3 3v12l.006 .114a1 1 0 0 0 1.508 .743l4.486 -2.691l4.486 2.691a1 1 0 0 0 1.514 -.857v-12a3 3 0 0 0 -3 -3z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M17 2a3 3 0 0 1 2.995 2.824l.005 .176v12a1 1 0 0 1 -1.413 .911l-.101 -.054l-1 -.6a1 1 0 0 1 .489 -1.857l.025 .001v-10.401a1 1 0 0 0 -.883 -.993l-.117 -.007h-6.001a1 1 0 0 0 -.803 .401l-.13 .197a1 1 0 0 1 -1.666 -1.098a3 3 0 0 1 2.4 -1.494l.2 -.006h6z"
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
@prop export let ariaLabel = 'bookmarks filled';
-->
