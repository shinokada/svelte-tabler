<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'brand cakephp';
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
    d="M12 11l8 2c1.361 -.545 2 -1.248 2 -2v-3.8c0 -1.765 -4.479 -3.2 -10.002 -3.2c-5.522 0 -9.998 1.435 -9.998 3.2v2.8c0 1.766 4.478 4 10 4v-3z"
  />
  <path d="M12 14v3l8 2c1.362 -.547 2 -1.246 2 -2v-3c0 .754 -.638 1.453 -2 2l-8 -2z" />
  <path d="M2 17c0 1.766 4.476 3 9.998 3l.002 -3c-5.522 0 -10 -1.734 -10 -3.5v3.5z" />
  <path d="M2 10v4" />
  <path d="M22 10v4" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'brand cakephp';
-->
