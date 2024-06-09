<script lang="ts">
  import type { Component } from 'svelte';
  interface Props{
    icon: Component;
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {icon, size = '24', role = 'img', ariaLabel = 'Icon', class: classname, ...restProps}: Props = $props()
</script>

<svelte:component 
  {...restProps} 
  {role}
  this={icon} 
  {size} 
  class={classname} 
  aria-label={ariaLabel}
/>