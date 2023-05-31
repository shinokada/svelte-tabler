<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'brand sugarizer';
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
    d="M14.277 16l3.252 -3.252a1.61 1.61 0 0 0 -2.277 -2.276l-3.252 3.251l-3.252 -3.251a1.61 1.61 0 0 0 -2.276 2.276l3.251 3.252l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277l3.252 -3.252l3.252 3.252a1.61 1.61 0 1 0 2.277 -2.277l-3.252 -3.252z"
  />
  <path d="M12 5m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
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
