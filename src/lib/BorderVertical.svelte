<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'border vertical';
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
  <path d="M12 4l0 16" />
  <path d="M4 4l0 .01" />
  <path d="M8 4l0 .01" />
  <path d="M16 4l0 .01" />
  <path d="M20 4l0 .01" />
  <path d="M4 8l0 .01" />
  <path d="M20 8l0 .01" />
  <path d="M4 12l0 .01" />
  <path d="M8 12l0 .01" />
  <path d="M16 12l0 .01" />
  <path d="M20 12l0 .01" />
  <path d="M4 16l0 .01" />
  <path d="M20 16l0 .01" />
  <path d="M4 20l0 .01" />
  <path d="M8 20l0 .01" />
  <path d="M16 20l0 .01" />
  <path d="M20 20l0 .01" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'border vertical';
-->
