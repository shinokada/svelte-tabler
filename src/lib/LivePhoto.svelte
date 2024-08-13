<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    strokeWidth = ctx.strokeWidth || '2',
    title,
    desc,
    ariaLabel =  "live photo" ,
    ...restProps 
  }: Props = $props();
  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
  fill="none" 
  stroke={color} 
  stroke-width={strokeWidth} 
  stroke-linecap="round" 
  stroke-linejoin="round"
>
  {#if title?.id && title.title}
  <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
  <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
     <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />   <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />   <path d="M15.9 20.11l0 .01" />   <path d="M19.04 17.61l0 .01" />   <path d="M20.77 14l0 .01" />   <path d="M20.77 10l0 .01" />   <path d="M19.04 6.39l0 .01" />   <path d="M15.9 3.89l0 .01" />   <path d="M12 3l0 .01" />   <path d="M8.1 3.89l0 .01" />   <path d="M4.96 6.39l0 .01" />   <path d="M3.23 10l0 .01" />   <path d="M3.23 14l0 .01" />   <path d="M4.96 17.61l0 .01" />   <path d="M8.1 20.11l0 .01" />   <path d="M12 21l0 .01" />   
</svg>

