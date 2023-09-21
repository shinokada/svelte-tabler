<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'snowflake off';
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
  <path d="M10 4l2 1l2 -1" />
  <path d="M12 2v6m1.196 1.186l1.804 1.034" />
  <path d="M17.928 6.268l.134 2.232l1.866 1.232" />
  <path d="M20.66 7l-5.629 3.25l-.031 .75" />
  <path d="M19.928 14.268l-1.015 .67" />
  <path d="M14.212 14.226l-2.171 1.262" />
  <path d="M14 20l-2 -1l-2 1" />
  <path d="M12 22v-6.5l-3 -1.72" />
  <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
  <path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
  <path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
  <path d="M3.34 7l5.629 3.25l.802 -.466" />
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
@prop export let ariaLabel = 'snowflake off';
-->
