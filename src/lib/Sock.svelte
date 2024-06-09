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
    ariaLabel =  "sock" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();
  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>
{#snippet path()}
     <path d="M13 3v6l4.798 5.142a4 4 0 0 1 -5.441 5.86l-6.736 -6.41a2 2 0 0 1 -.621 -1.451v-9.141h8z" />   <path d="M7.895 15.768c.708 -.721 1.105 -1.677 1.105 -2.768a4 4 0 0 0 -4 -4" />   
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
