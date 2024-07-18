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
    ariaLabel = 'hemisphere off',
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
  <path
    d="M6.588 6.603c-2.178 .547 -3.588 1.417 -3.588 2.397c0 1.657 4.03 3 9 3m3.72 -.267c3.114 -.473 5.28 -1.518 5.28 -2.733c0 -1.657 -4.03 -3 -9 -3c-.662 0 -1.308 .024 -1.93 .07"
  /> <path d="M3 9a9 9 0 0 0 13.677 7.69m2.165 -1.843a8.965 8.965 0 0 0 2.158 -5.847" />
  <path d="M3 3l18 18" />
</svg>
