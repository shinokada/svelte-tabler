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
    ariaLabel =  "wrecking ball" ,
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
     <path d="M19 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />   <path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />   <path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />   <path d="M13 19l-9 0" />   <path d="M4 15l9 0" />   <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />   <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />   <path d="M19 11v-7l-6 7" />   
</svg>

