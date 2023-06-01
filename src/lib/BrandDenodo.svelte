<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'brand denodo';
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
  <path d="M11 11h2v2h-2z" />
  <path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1z" />
  <path d="M11 19h2v2h-2z" />
  <path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z" />
  <path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1z" />
  <path d="M11 3h2v2h-2z" />
  <path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732z" />
</svg>

<!--
@component
[Go to Document](https://svelte-tabler.codewithshin.com/)
## Props
@prop size = '16';
@prop role = 'img';
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
