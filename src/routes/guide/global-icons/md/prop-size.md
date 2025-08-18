<script>
  import { setContext } from 'svelte';
  import { Accessible } from 'svelte-tabler';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<Accessible color="#ff4488" />
