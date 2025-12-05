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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
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
  <path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /> <path d="M6 12h4" /> <path d="M14 12h4" />
  <path d="M12 6v4" /> <path d="M12 14v4" /> <path d="M5.5 10.5l5 -5" /> <path d="M13.5 5.5l5 5" />
  <path d="M18.5 13.5l-5 5" /> <path d="M10.5 18.5l-5 -5" />
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
