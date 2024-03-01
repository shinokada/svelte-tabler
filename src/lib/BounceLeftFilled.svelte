<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'bounce left filled';
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
    d="M8.486 11.143a1 1 0 0 1 1.371 .343c1.045 1.74 1.83 3.443 2.392 5.237l.172 .581l.092 -.13c2.093 -2.921 4.48 -3.653 7.565 -2.7l.238 .077a1 1 0 1 1 -.632 1.898c-2.932 -.978 -4.73 -.122 -6.79 3.998c-.433 .866 -1.721 .673 -1.88 -.283c-.46 -2.76 -1.369 -5.145 -2.871 -7.65a1 1 0 0 1 .343 -1.371z"
    stroke-width="0"
    fill="currentColor"
  />
  <path d="M6 4a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'bounce left filled';
-->
