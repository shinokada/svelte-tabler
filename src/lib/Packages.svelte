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
    ariaLabel =  "packages" ,
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
     <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />   <path d="M2 13.5v5.5l5 3" />   <path d="M7 16.545l5 -3.03" />   <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />   <path d="M12 19l5 3" />   <path d="M17 16.5l5 -3" />   <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />   <path d="M7 5.03v5.455" />   <path d="M12 8l5 -3" />   
</svg>

