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
    d="M21.648 6.808c-2.468 4.28 -4.937 8.56 -7.408 12.836c-.397 .777 -1.366 1.301 -2.24 1.356c-.962 .102 -1.7 -.402 -2.154 -1.254c-1.563 -2.684 -3.106 -5.374 -4.66 -8.064c-.943 -1.633 -1.891 -3.266 -2.83 -4.905a2.47 2.47 0 0 1 -.06 -2.45a2.493 2.493 0 0 1 2.085 -1.307c.951 -.065 1.85 .438 2.287 1.281c.697 1.19 2.043 3.83 2.55 4.682a3.919 3.919 0 0 0 3.282 2.017c2.126 .133 3.974 -.95 4.21 -3.058c0 -.164 .228 -3.178 .846 -3.962c.619 -.784 1.64 -1.155 2.606 -.893a2.484 2.484 0 0 1 1.814 2.062c.08 .581 -.041 1.171 -.343 1.674"
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
