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
    ariaLabel = 'binary tree 2',
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
  <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M12 8v8" />
  <path d="M6.316 12.496l4.368 -4.992" /> <path d="M17.684 12.496l-4.366 -4.99" />
</svg>
