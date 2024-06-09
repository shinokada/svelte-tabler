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
    ariaLabel =  "brand storj" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();
  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>
{#snippet path()}
     <path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />   <path d="M4 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />   <path d="M20 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />   <path d="M20 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />   <path d="M12 3m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />   <path d="M12 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />   <path d="M12 21l-8 -4v-10l8 -4l8 4v10z" />   <path d="M9.1 15a2.1 2.1 0 0 1 -.648 -4.098c.282 -1.648 1.319 -2.902 3.048 -2.902c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19l-.202 .01h-5.8z" />   <path d="M4 7l4.323 2.702" />   <path d="M16.413 14.758l3.587 2.242" />   <path d="M4 17l3.529 -2.206" />   <path d="M14.609 10.37l5.391 -3.37" />   <path d="M12 3v5" />   <path d="M12 15v6" />   
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
