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
  <path d="M10 4l2 1l2 -1" /> <path d="M12 2v6m1.196 1.186l1.804 1.034" />
  <path d="M17.928 6.268l.134 2.232l1.866 1.232" /> <path d="M20.66 7l-5.629 3.25l-.031 .75" />
  <path d="M19.928 14.268l-1.015 .67" /> <path d="M14.212 14.226l-2.171 1.262" />
  <path d="M14 20l-2 -1l-2 1" /> <path d="M12 22v-6.5l-3 -1.72" />
  <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
  <path d="M3.34 17l5.629 -3.25l-.01 -3.458" /> <path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
  <path d="M3.34 7l5.629 3.25l.802 -.466" /> <path d="M3 3l18 18" />
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
