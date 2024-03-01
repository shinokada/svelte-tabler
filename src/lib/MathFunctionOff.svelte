<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'math function off';
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
  <path d="M14 10h1c.882 0 .986 .777 1.694 2.692" />
  <path
    d="M13 17c.864 0 1.727 -.663 2.495 -1.512m1.717 -2.302c.993 -1.45 2.39 -3.186 3.788 -3.186"
  />
  <path
    d="M3 19c0 1.5 .5 2 2 2s2 -4 3 -9c.237 -1.186 .446 -2.317 .647 -3.35m.727 -3.248c.423 -1.492 .91 -2.402 1.626 -2.402c1.5 0 2 .5 2 2"
  />
  <path d="M5 12h6" />
  <path d="M3 3l18 18" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'math function off';
-->
