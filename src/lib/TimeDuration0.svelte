<script lang="ts">
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
    ariaLabel = 'time duration 0',
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
  <path d="M3 12v.01" /> <path d="M21 12v.01" /> <path d="M12 21v.01" /> <path d="M12 3v.01" />
  <path d="M7.5 4.2v.01" /> <path d="M16.5 4.2v.01" /> <path d="M16.5 19.8v.01" />
  <path d="M7.5 19.8v.01" /> <path d="M4.2 16.5v.01" /> <path d="M19.8 16.5v.01" />
  <path d="M19.8 7.5v.01" /> <path d="M4.2 7.5v.01" />
  <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
</svg>
