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
    ariaLabel = 'brand vinted',
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
    d="M11.028 6c0 7.695 -.292 11.728 0 12c2.046 -5 4.246 -12.642 5.252 -14.099c.343 -.497 .768 -.93 1.257 -1.277c.603 -.39 1.292 -.76 1.463 -.575c-.07 2.319 -4.023 15.822 -4.209 16.314a6.135 6.135 0 0 1 -3.465 3.386c-3.213 .78 -3.429 -.446 -3.836 -1.134c-.95 -2.103 -1.682 -14.26 -1.445 -15.615c.05 -.523 .143 -1.851 2.491 -2c2.359 -.354 2.547 1.404 2.492 3z"
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
@prop ariaLabel = 'brand vinted'
@prop ...restProps
-->
