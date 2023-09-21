<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'frustum off';
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
    d="M7.72 3.728l3.484 -1.558a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554 .246 .963 .736 1.112 1.328l2.538 10.158c.103 .412 .07 .832 -.075 1.206m-2.299 1.699l-5.725 2.738a1.945 1.945 0 0 1 -1.682 0l-7.035 -3.365a1.99 1.99 0 0 1 -1.064 -2.278l2.52 -10.08"
  />
  <path d="M18 4.82l-5.198 2.324a1.963 1.963 0 0 1 -1.602 0" />
  <path d="M12 7.32v.68m0 4v9.5" />
  <path d="M3 3l18 18" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'frustum off';
-->
