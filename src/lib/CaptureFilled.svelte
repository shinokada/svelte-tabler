<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'capture filled';
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
    d="M8 3a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 0 -.993 .883l-.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M4 15a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 0 .883 .993l.117 .007h2a1 1 0 0 1 .117 1.993l-.117 .007h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-2a1 1 0 0 1 1 -1z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 0 -.883 -.993l-.117 -.007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M20 15a1 1 0 0 1 .993 .883l.007 .117v2a3 3 0 0 1 -2.824 2.995l-.176 .005h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2a1 1 0 0 0 .993 -.883l.007 -.117v-2a1 1 0 0 1 1 -1z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z"
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
@prop export let ariaLabel = 'capture filled';
-->
