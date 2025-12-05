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
  <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" /> <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
  <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" /> <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
  <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" /> <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
  <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" /> <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
  <path d="M12 8l-2 4h4l-2 4" /> <path d="M12 21a9 9 0 0 0 0 -18" />
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
