<script>
  import { setContext } from 'svelte';
  import { ZoomIn, Vocabulary } from '$lib';
  const iconCtx = {
    size: '100', // Icon size in pixels
    color: '#00ff00', // Icon color in hexadecimal or CSS color name
    strokeWidth: "1"
  };
  setContext('iconCtx', iconCtx);
</script>

<ZoomIn />
<Vocabulary />
