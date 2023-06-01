<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'hexagonal pyramid';
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
  <path
    d="M11.162 2.457l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l2.527 -2.523a1.988 1.988 0 0 0 .267 -2.483l-7.846 -12.954a.996 .996 0 0 0 -1.676 0z"
  />
  <path d="M12 2l-5 18.9" />
  <path d="M12 2l5 18.9" />
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
