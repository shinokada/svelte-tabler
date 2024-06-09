<script>
  import { setContext } from 'svelte';
  import { AccessibleOutline } from 'svelte-tabler';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<AccessibleOutline color="#ff4488" />