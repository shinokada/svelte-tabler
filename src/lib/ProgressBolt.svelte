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
    ariaLabel =  "progress bolt" ,
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
     <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />   <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />   <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />   <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />   <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />   <path d="M12 9l-2 3h4l-2 3" />   
</svg>

