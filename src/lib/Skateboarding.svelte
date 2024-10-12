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
    ariaLabel = 'skateboarding',
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
  <path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /> <path d="M5.5 15h3.5l.75 -1.5" />
  <path d="M14 19v-5l-2.5 -3l2.5 -4" /> <path d="M8 8l3 -1h4l1 3h3" />
  <path d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" />
  <path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" />
  <path d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" />
</svg>
