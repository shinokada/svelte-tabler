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
    ariaLabel = 'binary tree',
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
  <path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M5.058 18.306l2.88 -4.606" />
  <path d="M10.061 10.303l2.877 -4.604" /> <path d="M10.065 13.705l2.876 4.6" />
  <path d="M15.063 5.7l2.881 4.61" />
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
@prop ariaLabel = 'binary tree'
@prop ...restProps
-->
