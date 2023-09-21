<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'disc golf';
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
  <path d="M5 5h14" />
  <path d="M6 5c.32 6.744 2.74 9.246 6 10" />
  <path d="M18 5c-.32 6.744 -2.74 9.246 -6 10" />
  <path d="M10 5c0 4.915 .552 7.082 2 10" />
  <path d="M14 5c0 4.915 -.552 7.082 -2 10" />
  <path d="M12 15v6" />
  <path d="M12 3v2" />
  <path d="M7 16c.64 .64 1.509 1 2.414 1h5.172c.905 0 1.774 -.36 2.414 -1" />
  <path d="M11 21h2" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'disc golf';
-->
