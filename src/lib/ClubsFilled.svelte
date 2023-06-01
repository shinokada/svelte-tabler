<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'clubs filled';
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
    d="M12 2a5 5 0 0 0 -4.488 2.797l-.103 .225a4.998 4.998 0 0 0 -.334 2.837l.027 .14a5 5 0 0 0 -3.091 9.009l.198 .14a4.998 4.998 0 0 0 4.42 .58l.174 -.066l-.773 3.095a1 1 0 0 0 .97 1.243h6l.113 -.006a1 1 0 0 0 .857 -1.237l-.774 -3.095l.174 .065a5 5 0 1 0 1.527 -9.727l.028 -.14a4.997 4.997 0 0 0 -4.925 -5.86z"
    stroke-width="0"
    fill="currentColor"
  />
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
