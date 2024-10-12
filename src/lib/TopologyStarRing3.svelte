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
    ariaLabel = 'topology star ring 3',
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
  <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M6 12h4" /> <path d="M14 12h4" />
  <path d="M15 7l-2 3" /> <path d="M9 7l2 3" /> <path d="M11 14l-2 3" /> <path d="M13 14l2 3" />
  <path d="M10 5h4" /> <path d="M10 19h4" /> <path d="M17 17l2 -3" /> <path d="M19 10l-2 -3" />
  <path d="M7 7l-2 3" /> <path d="M5 14l2 3" />
</svg>
