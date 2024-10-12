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
    ariaLabel = 'snowflake',
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
  <path d="M10 4l2 1l2 -1" /> <path d="M12 2v6.5l3 1.72" />
  <path d="M17.928 6.268l.134 2.232l1.866 1.232" /> <path d="M20.66 7l-5.629 3.25l.01 3.458" />
  <path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
  <path d="M20.66 17l-5.629 -3.25l-2.99 1.738" /> <path d="M14 20l-2 -1l-2 1" />
  <path d="M12 22v-6.5l-3 -1.72" /> <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
  <path d="M3.34 17l5.629 -3.25l-.01 -3.458" /> <path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
  <path d="M3.34 7l5.629 3.25l2.99 -1.738" />
</svg>
