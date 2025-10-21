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
    d="M3.9 7.205a17.764 17.764 0 0 0 4.008 2.753a7.917 7.917 0 0 0 4.57 .567c1.5 -.33 2.907 -1 4.121 -1.956a12.107 12.107 0 0 0 2.892 -2.903c.603 -.94 .745 -1.766 .484 -2.231c-.261 -.465 -.927 -.568 -1.72 -.257a7.564 7.564 0 0 0 -2.608 2.034a18.425 18.425 0 0 0 -2.588 3.884a34.927 34.927 0 0 0 -2.093 5.073a12.908 12.908 0 0 0 -.677 3.515c-.07 .752 .07 1.51 .405 2.184c.323 .562 1.06 1.132 2.343 1.132c3.474 0 5.093 -3.53 5.463 -5.62c.24 -1.365 -.085 -3.197 -1.182 -4.01"
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
