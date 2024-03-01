<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'brand taobao';
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
  <path d="M2 5c.968 .555 1.335 1.104 2 2" />
  <path d="M2 10c5.007 3.674 2.85 6.544 0 10" />
  <path d="M10 4c-.137 4.137 -2.258 5.286 -3.709 6.684" />
  <path
    d="M10 6c2.194 -.8 3.736 -.852 6.056 -.993c4.206 -.158 5.523 2.264 5.803 5.153c.428 4.396 -.077 7.186 -2.117 9.298c-1.188 1.23 -3.238 2.62 -7.207 .259"
  />
  <path d="M11 10h6" />
  <path d="M13 10v6.493" />
  <path d="M8 13h10" />
  <path d="M16 15.512l.853 1.72" />
  <path d="M16.5 17c-1.145 .361 -7 3 -8.5 -.5" />
  <path d="M11.765 8.539l-1.765 2.461" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'brand taobao';
-->
