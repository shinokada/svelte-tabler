<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'brand baidu';
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
  <path d="M5 9.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
  <path
    d="M14.463 11.596c1.282 1.774 3.476 3.416 3.476 3.416s1.921 1.574 .593 3.636c-1.328 2.063 -4.892 1.152 -4.892 1.152s-1.416 -.44 -3.06 -.088c-1.644 .356 -3.06 .22 -3.06 .22s-2.055 -.22 -2.47 -2.304c-.416 -2.084 1.918 -3.638 2.102 -3.858c.182 -.222 1.409 -.966 2.284 -2.394c.875 -1.428 3.337 -2.287 5.027 .221z"
  />
  <path d="M9 4.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
  <path d="M15 4.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
  <path d="M19 9.5m-1 0a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'brand baidu';
-->
