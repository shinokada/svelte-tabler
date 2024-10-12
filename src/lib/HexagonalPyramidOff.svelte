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
    ariaLabel = 'hexagonal pyramid off',
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
    d="M7.877 7.88l-4.56 7.53a1.988 1.988 0 0 0 .266 2.484l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l1.264 -1.263m1.792 -2.205a1.986 1.986 0 0 0 -.262 -1.538l-7.846 -12.954a.996 .996 0 0 0 -1.676 0l-1.772 2.926"
  /> <path d="M12 2l-1.254 4.742m-.841 3.177l-2.905 10.981" />
  <path d="M12 2l2.153 8.14m1.444 5.457l1.403 5.303" /> <path d="M3 3l18 18" />
</svg>
