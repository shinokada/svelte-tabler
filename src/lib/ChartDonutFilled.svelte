<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'chart donut filled';
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
    d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025 .167l.005 .104v4a1 1 0 0 1 -.641 .933l-.107 .035a3.1 3.1 0 1 0 3.73 3.953l.05 -.173a1 1 0 0 1 .855 -.742l.113 -.006h3.8a2 2 0 0 1 2 2a1 1 0 0 1 -.026 .226a10 10 0 1 1 -12.27 -11.933l.27 -.067l.11 -.02z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M14.775 2.526a.996 .996 0 0 1 .22 -.026l.122 .007l.112 .02l.103 .03a10 10 0 0 1 6.003 5.817l.108 .294a1 1 0 0 1 -.824 1.325l-.119 .007h-4.5a1 1 0 0 1 -.76 -.35a8 8 0 0 0 -.89 -.89a1 1 0 0 1 -.342 -.636l-.008 -.124v-4.495l.006 -.118c.005 -.042 .012 -.08 .02 -.116l.03 -.103a.998 .998 0 0 1 .168 -.299l.071 -.08c.03 -.028 .058 -.052 .087 -.075l.09 -.063l.088 -.05l.103 -.043l.112 -.032z"
    stroke-width="0"
    fill="currentColor"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'chart donut filled';
-->
