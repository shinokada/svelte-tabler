<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'deer';
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
  <path d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3" />
  <path d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3" />
  <path d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6" />
  <path d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0" />
  <path d="M17 3c0 1.333 -.333 2.333 -1 3" />
  <path d="M7 3c0 1.333 .333 2.333 1 3" />
  <path d="M7 6c-2.667 .667 -4.333 1.667 -5 3" />
  <path d="M17 6c2.667 .667 4.333 1.667 5 3" />
  <path d="M8.5 10l-1.5 -1" />
  <path d="M15.5 10l1.5 -1" />
  <path d="M12 15h.01" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'deer';
-->
