<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'disc off';
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
    d="M20.044 16.04a9 9 0 0 0 -12.082 -12.085m-2.333 1.688a9 9 0 0 0 6.371 15.357c2.491 0 4.73 -1 6.36 -2.631"
  />
  <path d="M11.298 11.288a1 1 0 1 0 1.402 1.427" />
  <path d="M7 12c0 -1.38 .559 -2.629 1.462 -3.534m2.607 -1.38c.302 -.056 .613 -.086 .931 -.086" />
  <path d="M12 17a4.985 4.985 0 0 0 3.551 -1.48m1.362 -2.587c.057 -.302 .087 -.614 .087 -.933" />
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
@prop export let ariaLabel = 'disc off';
-->
