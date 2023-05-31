<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'chess queen filled';
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
    d="M12 2a2 2 0 0 1 1.572 3.236l.793 1.983l1.702 -1.702a2.003 2.003 0 0 1 1.933 -2.517a2 2 0 0 1 .674 3.884l-1.69 9.295a1 1 0 0 1 -.865 .814l-.119 .007h-8a1 1 0 0 1 -.956 -.705l-.028 -.116l-1.69 -9.295a2 2 0 1 1 2.607 -1.367l1.701 1.702l.794 -1.983a2 2 0 0 1 1.572 -3.236z"
    stroke-width="0"
    fill="currentColor"
  />
  <path
    d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z"
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
