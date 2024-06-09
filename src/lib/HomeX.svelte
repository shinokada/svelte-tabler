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
    ariaLabel =  "home x" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();
  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>
{#snippet path()}
     <path d="M19 13.4v-1.4h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />   <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.402 0 .777 .119 1.091 .323" />   <path d="M21.5 21.5l-5 -5" />   <path d="M16.5 21.5l5 -5" />   
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
