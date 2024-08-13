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
    ariaLabel =  "circle dashed letter r" ,
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
     <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />   <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />   <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />   <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />   <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />   <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />   <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />   <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />   <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />   
</svg>

