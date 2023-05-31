<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'load balancer';
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
  <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 16v3" />
  <path d="M12 10v-7" />
  <path d="M9 6l3 -3l3 3" />
  <path d="M12 10v-7" />
  <path d="M9 6l3 -3l3 3" />
  <path d="M14.894 12.227l6.11 -2.224" />
  <path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
  <path d="M9.101 12.214l-6.075 -2.211" />
  <path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
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
