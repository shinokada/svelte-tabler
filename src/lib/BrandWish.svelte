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
    ariaLabel =  "brand wish" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();
  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>
{#snippet path()}
     <path d="M2 6l5.981 2.392l-.639 6.037c-.18 .893 .06 1.819 .65 2.514a3 3 0 0 0 2.381 1.057a4.328 4.328 0 0 0 4.132 -3.57c-.18 .893 .06 1.819 .65 2.514a3 3 0 0 0 2.38 1.056a4.328 4.328 0 0 0 4.132 -3.57l.333 -4.633" />   <path d="M14.504 14.429l.334 -3" />   
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
