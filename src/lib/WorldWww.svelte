<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'world www';
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
  <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
  <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
  <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
  <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
  <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
  <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
  <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
  <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
  <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
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
