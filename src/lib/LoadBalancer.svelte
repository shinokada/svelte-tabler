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
    ariaLabel = 'load balancer',
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
  <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M12 16v3" /> <path d="M12 10v-7" />
  <path d="M9 6l3 -3l3 3" /> <path d="M12 10v-7" /> <path d="M9 6l3 -3l3 3" />
  <path d="M14.894 12.227l6.11 -2.224" /> <path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
  <path d="M9.101 12.214l-6.075 -2.211" /> <path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
</svg>
