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
    ariaLabel = 'brand sentry',
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
    d="M3 18a1.93 1.93 0 0 0 .306 1.076a2 2 0 0 0 1.584 .924c.646 .033 -.537 0 .11 0h3a4.992 4.992 0 0 0 -3.66 -4.81c.558 -.973 1.24 -2.149 2.04 -3.531a9 9 0 0 1 5.62 8.341h4c.663 0 2.337 0 3 0a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-1.84 3.176c4.482 2.05 7.6 6.571 7.6 11.824"
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
@prop ariaLabel = 'brand sentry'
@prop ...restProps
-->
