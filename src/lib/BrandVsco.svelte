<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'brand vsco';
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
  <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
  <path d="M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0z" />
  <path d="M12 3v4" />
  <path d="M21 12h-4" />
  <path d="M12 21v-4" />
  <path d="M3 12h4" />
  <path d="M18.364 5.636l-2.828 2.828" />
  <path d="M18.364 18.364l-2.828 -2.828" />
  <path d="M5.636 18.364l2.828 -2.828" />
  <path d="M5.636 5.636l2.828 2.828" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'brand vsco';
-->
