<script lang="ts">
  import type { Component } from 'svelte';
  const config = {
    size: '30',
    color: '#FF5733'
  };
  import { Icon } from 'svelte-tabler';
  export let icon: Component;
</script>

<Icon {...config} {icon} />