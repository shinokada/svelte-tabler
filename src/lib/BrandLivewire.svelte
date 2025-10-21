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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
    d="M20.982 18.777c-.372 .548 -.652 1.223 -1.406 1.223c-1.269 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.269 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-.398 0 -.679 -.189 -.915 -.448a10.414 10.414 0 0 1 -1.43 -5.29c0 -5.669 4.477 -10.262 10 -10.262c5.524 0 10 4.594 10 10.261c0 1.62 -.366 3.152 -1.018 4.516z"
  />
  <path
    d="M20.982 18.777c-.372 .548 -.652 1.223 -1.406 1.223c-1.269 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.269 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-.398 0 -.679 -.189 -.915 -.448a10.414 10.414 0 0 1 -1.43 -5.29c0 -5.669 4.477 -10.262 10 -10.262c5.524 0 10 4.594 10 10.261c0 1.62 -.366 3.152 -1.018 4.516z"
  />
  <path
    d="M11.5 16c3.167 0 4.5 -1.748 4.5 -4.231c0 -2.484 -2.014 -4.769 -4.5 -4.769c-2.485 0 -4.5 2.286 -4.5 4.769s1.333 4.231 4.5 4.231z"
  /> <path d="M10 11a1 1 0 1 0 0 -2a1 1 0 0 0 0 2z" />
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
