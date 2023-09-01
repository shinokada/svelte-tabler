<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 16;
  export let role: string = 'img';
  export let color: string = 'currentColor';
  export let ariaLabel = 'Icon';
</script>

<svelte:component
  this={icon}
  {...$$restProps}
  {role}
  {size}
  {color}
  class={$$props.class}
  {ariaLabel}
/>

<!--
@component
[Go to docs](https://svelte-tabler.vercel.app/)
## Props
@prop export let icon: ComponentType;
@prop export let size: number = 16;
@prop export let role: string = 'img';
@prop export let color: string = 'currentColor';
@prop export let ariaLabel = 'Icon';
-->
