<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'crutches off';
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
  <path d="M8.178 4.174a2 2 0 0 1 1.822 -1.174h4a2 2 0 1 1 0 4h-3" />
  <path d="M11 21h2" />
  <path d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .097 -.155m.407 -3.601v-3" />
  <path d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-2.092" />
  <path d="M10 11h1" />
  <path d="M3 3l18 18" />
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
