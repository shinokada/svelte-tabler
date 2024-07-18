<script lang="ts">
  import type { Component } from 'svelte';
  import type { Props } from './types';

  interface IconProps extends Props {
    icon: Component;
  }

  let { icon, size = '24', role = 'img', ariaLabel = 'Icon', ...restProps }: IconProps = $props();
</script>

<svelte:component this={icon} {...restProps} {role} {size} aria-label={ariaLabel} />
