<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'fountain filled';
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
    d="M15 2a4 4 0 0 1 4 4a1 1 0 0 1 -1.993 .117l-.007 -.117a2 2 0 0 0 -3.995 -.15l-.005 .15v9h1v-4a3 3 0 0 1 6 0a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -1.993 -.117l-.007 .117v4h5a1 1 0 0 1 .993 .883l.007 .117v2a4 4 0 0 1 -3.8 3.995l-.2 .005h-12a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-2a1 1 0 0 1 .883 -.993l.117 -.007h5v-4a1 1 0 0 0 -1.993 -.117l-.007 .117a1 1 0 0 1 -2 0a3 3 0 0 1 5.995 -.176l.005 .176v4h1v-9a2 2 0 1 0 -4 0a1 1 0 1 1 -2 0a4 4 0 0 1 7.001 -2.645a3.983 3.983 0 0 1 2.999 -1.355z"
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
@prop export let ariaLabel = 'fountain filled';
-->
