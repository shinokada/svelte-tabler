<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'brand bunpo';
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
    d="M3.9 7.205a17.764 17.764 0 0 0 4.008 2.753a7.917 7.917 0 0 0 4.57 .567c1.5 -.33 2.907 -1 4.121 -1.956a12.107 12.107 0 0 0 2.892 -2.903c.603 -.94 .745 -1.766 .484 -2.231c-.261 -.465 -.927 -.568 -1.72 -.257a7.564 7.564 0 0 0 -2.608 2.034a18.425 18.425 0 0 0 -2.588 3.884a34.927 34.927 0 0 0 -2.093 5.073a12.908 12.908 0 0 0 -.677 3.515c-.07 .752 .07 1.51 .405 2.184c.323 .562 1.06 1.132 2.343 1.132c3.474 0 5.093 -3.53 5.463 -5.62c.24 -1.365 -.085 -3.197 -1.182 -4.01"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'brand bunpo';
-->
