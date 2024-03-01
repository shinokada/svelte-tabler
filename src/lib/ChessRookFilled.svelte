<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'chess rook filled';
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
    d="M14 3a1 1 0 0 1 .993 .883l.007 .117v2h1.652l.362 -2.164a1 1 0 0 1 1.034 -.836l.116 .013a1 1 0 0 1 .836 1.035l-.013 .116l-.5 3a1 1 0 0 1 -.865 .829l-.122 .007h-1.383l.877 7.89a1 1 0 0 1 -.877 1.103l-.117 .007h-8a1 1 0 0 1 -1 -.993l.006 -.117l.877 -7.89h-1.383a1 1 0 0 1 -.96 -.718l-.026 -.118l-.5 -3a1 1 0 0 1 1.947 -.442l.025 .114l.361 2.164h1.653v-2a1 1 0 0 1 1.993 -.117l.007 .117v2h2v-2a1 1 0 0 1 1 -1z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z"
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
@prop export let ariaLabel = 'chess rook filled';
-->
