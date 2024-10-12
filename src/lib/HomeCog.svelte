<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';
  const ctx: BaseProps = getContext('iconCtx') ?? {};
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    strokeWidth = ctx.strokeWidth || '2',
    title,
    desc,
    ariaLabel = 'home cog',
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
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M9 21v-6a2 2 0 0 1 2 -2h1.6" /> <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4.159" />
  <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M18 14.5v1.5" />
  <path d="M18 20v1.5" /> <path d="M21.032 16.25l-1.299 .75" /> <path d="M16.27 19l-1.3 .75" />
  <path d="M14.97 16.25l1.3 .75" /> <path d="M19.733 19l1.3 .75" />
</svg>
