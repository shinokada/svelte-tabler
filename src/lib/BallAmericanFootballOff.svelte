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
    ariaLabel = 'ball american football off',
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
  <path d="M15 9l-1 1m-2 2l-3 3" /> <path d="M10 12l2 2" /> <path d="M8 21a5 5 0 0 0 -5 -5" />
  <path
    d="M6.813 6.802a12.96 12.96 0 0 0 -3.813 9.198a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.186 -3.801m1.789 -2.227a12.94 12.94 0 0 0 2.025 -6.972a5 5 0 0 0 -5 -5a12.94 12.94 0 0 0 -6.967 2.022"
  /> <path d="M16 3a5 5 0 0 0 5 5" /> <path d="M3 3l18 18" />
</svg>

<!--
@component
[Go to docs](https://svelte-tabler.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop strokeWidth = ctx.strokeWidth || '2'
@prop title
@prop desc
@prop ariaLabel = 'ball american football off'
@prop ...restProps
-->
