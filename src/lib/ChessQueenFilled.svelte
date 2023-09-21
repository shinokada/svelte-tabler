<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'chess queen filled';
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
    d="M12 2a2 2 0 0 1 1.572 3.236l.793 1.983l1.702 -1.702a2.003 2.003 0 0 1 1.933 -2.517a2 2 0 0 1 .674 3.884l-1.69 9.295a1 1 0 0 1 -.865 .814l-.119 .007h-8a1 1 0 0 1 -.956 -.705l-.028 -.116l-1.69 -9.295a2 2 0 1 1 2.607 -1.367l1.701 1.702l.794 -1.983a2 2 0 0 1 1.572 -3.236z"
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
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'chess queen filled';
-->
