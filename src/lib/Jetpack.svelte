<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'jetpack';
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
  stroke-width="2"
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 6a3 3 0 1 0 -6 0v7h6v-7z" />
  <path d="M14 13h6v-7a3 3 0 0 0 -6 0v7z" />
  <path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
  <path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
  <path d="M10 8h4" />
  <path d="M10 11h4" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let size = '16';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'jetpack';
-->
