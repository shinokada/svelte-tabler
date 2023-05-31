<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'border horizontal';
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
  <path d="M4 12l16 0" />
  <path d="M4 4l0 .01" />
  <path d="M8 4l0 .01" />
  <path d="M12 4l0 .01" />
  <path d="M16 4l0 .01" />
  <path d="M20 4l0 .01" />
  <path d="M4 8l0 .01" />
  <path d="M12 8l0 .01" />
  <path d="M20 8l0 .01" />
  <path d="M4 16l0 .01" />
  <path d="M12 16l0 .01" />
  <path d="M20 16l0 .01" />
  <path d="M4 20l0 .01" />
  <path d="M8 20l0 .01" />
  <path d="M12 20l0 .01" />
  <path d="M16 20l0 .01" />
  <path d="M20 20l0 .01" />
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
