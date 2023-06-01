<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'rotate 2';
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
  <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
  <path d="M18.37 7.16l0 .01" />
  <path d="M13 19.94l0 .01" />
  <path d="M16.84 18.37l0 .01" />
  <path d="M19.37 15.1l0 .01" />
  <path d="M19.94 11l0 .01" />
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
