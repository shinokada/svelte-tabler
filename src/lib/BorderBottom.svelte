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
    ariaLabel = 'border bottom',
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
  <path d="M20 20l-16 0" /> <path d="M4 4l0 .01" /> <path d="M8 4l0 .01" /> <path d="M12 4l0 .01" />
  <path d="M16 4l0 .01" /> <path d="M20 4l0 .01" /> <path d="M4 8l0 .01" /> <path d="M12 8l0 .01" />
  <path d="M20 8l0 .01" /> <path d="M4 12l0 .01" /> <path d="M8 12l0 .01" />
  <path d="M12 12l0 .01" /> <path d="M16 12l0 .01" /> <path d="M20 12l0 .01" />
  <path d="M4 16l0 .01" /> <path d="M12 16l0 .01" /> <path d="M20 16l0 .01" />
</svg>
