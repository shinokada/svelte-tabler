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
    ariaLabel = 'cube 3d sphere off',
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
  <path d="M6 17.6l-2 -1.1v-2.5" /> <path d="M4 10v-2.5l2 -1.1" /> <path d="M10 4.1l2 -1.1l2 1.1" />
  <path d="M18 6.4l2 1.1v2.5" /> <path d="M20 14v2" /> <path d="M14 19.9l-2 1.1l-2 -1.1" />
  <path d="M18 8.6l2 -1.1" /> <path d="M12 12v2.5" /> <path d="M12 18.5v2.5" />
  <path d="M12 12l-2 -1.12" /> <path d="M6 8.6l-2 -1.1" /> <path d="M3 3l18 18" />
</svg>
