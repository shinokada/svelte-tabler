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
  <path d="M4 17a3 3 0 0 0 3 3" />
  <path d="M14.805 6.37l2.783 -2.784a2 2 0 1 1 2.829 2.828l-2.784 2.786" />
  <path
    d="M16.505 7.495a5.105 5.105 0 0 1 .176 7.035l-.176 .184l-1.867 1.867a3.48 3.48 0 0 0 -1.013 2.234l-.008 .23v.934c0 .327 -.13 .64 -.36 .871a.51 .51 0 0 1 -.652 .06l-.07 -.06l-9.385 -9.384a.51 .51 0 0 1 0 -.722c.198 -.198 .456 -.322 .732 -.353l.139 -.008h.933c.848 0 1.663 -.309 2.297 -.864l.168 -.157l1.867 -1.867l.16 -.153a5.105 5.105 0 0 1 7.059 .153z"
  />
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
