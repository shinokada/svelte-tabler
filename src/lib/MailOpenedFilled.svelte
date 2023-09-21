<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'mail opened filled';
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
    d="M14.872 14.287l6.522 6.52a2.996 2.996 0 0 1 -2.218 1.188l-.176 .005h-14a2.995 2.995 0 0 1 -2.394 -1.191l6.521 -6.522l2.318 1.545l.116 .066a1 1 0 0 0 .878 0l.116 -.066l2.317 -1.545z"
    stroke-width="0"
    fill="currentColor"
  />
  <path d="M2 9.535l5.429 3.62l-5.429 5.43z" stroke-width="0" fill="currentColor" />
  <path d="M22 9.535v9.05l-5.43 -5.43z" stroke-width="0" fill="currentColor" />
  <path
    d="M12.44 2.102l.115 .066l8.444 5.629l-8.999 6l-9 -6l8.445 -5.63a1 1 0 0 1 .994 -.065z"
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
@prop export let ariaLabel = 'mail opened filled';
-->
