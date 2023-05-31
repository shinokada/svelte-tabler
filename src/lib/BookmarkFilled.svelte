<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'bookmark filled';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={$$props.class}
  width={size}
  height={size}
  {...$$restProps}
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
  <path
    d="M15 3a3 3 0 0 1 2.995 2.824l.005 .176v14a1 1 0 0 1 -1.413 .911l-.101 -.054l-4.487 -2.691l-4.485 2.691a1 1 0 0 1 -1.508 -.743l-.006 -.114v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h6z"
    stroke-width="0"
    fill="currentColor"
  />
</svg>

<!--
@component
[Go to Document](https://svelte-tabler.codewithshin.com/)
## Props
@prop size = '16';
@prop color = 'currentColor';
@prop ariaLabel = 'icon file name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
