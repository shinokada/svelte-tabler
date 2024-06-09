<script>
  import { AccessibleOutline } from 'svelte-tabler';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AccessibleOutline({ target: document.body, props });
  });
</script>