<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'live photo off';
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
  <path d="M11.296 11.29a1 1 0 1 0 1.414 1.415" />
  <path d="M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851" />
  <path d="M15.9 20.11v.01" />
  <path d="M19.04 17.61v.01" />
  <path d="M20.77 14v.01" />
  <path d="M20.77 10v.01" />
  <path d="M19.04 6.39v.01" />
  <path d="M15.9 3.89v.01" />
  <path d="M12 3v.01" />
  <path d="M8.1 3.89v.01" />
  <path d="M4.96 6.39v.01" />
  <path d="M3.23 10v.01" />
  <path d="M3.23 14v.01" />
  <path d="M4.96 17.61v.01" />
  <path d="M8.1 20.11v.01" />
  <path d="M12 21v.01" />
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
@prop export let ariaLabel = 'live photo off';
-->
