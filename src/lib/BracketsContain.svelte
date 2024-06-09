<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor',
    strokeWidth = ctx.strokeWidth || '2',
    withEvents = ctx.withEvents || false, 
    title, 
    desc, 
    class: classname, 
    ariaLabel =  "brackets contain" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();
  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>
{#snippet path()}
     <path d="M7 4h-4v16h4" />   <path d="M17 4h4v16h-4" />   <path d="M8 16h.01" />   <path d="M12 16h.01" />   <path d="M16 16h.01" />   
{/snippet}
{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
    fill="none" 
    stroke={color} 
    stroke-width={strokeWidth} 
    stroke-linecap="round" 
    stroke-linejoin="round"
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
    {@render path()} 
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
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
    {@render path()} 
  </svg>
{/if}
