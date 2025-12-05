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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
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
  <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /> <path d="M12 7v-4" /> <path d="M11 3h2" />
  <path d="M15.536 8.464l2.828 -2.828" /> <path d="M17.657 4.929l1.414 1.414" />
  <path d="M17 12h4" /> <path d="M21 11v2" /> <path d="M15.535 15.536l2.829 2.828" />
  <path d="M19.071 17.657l-1.414 1.414" /> <path d="M12 17v4" /> <path d="M13 21h-2" />
  <path d="M8.465 15.536l-2.829 2.828" /> <path d="M6.343 19.071l-1.413 -1.414" />
  <path d="M7 12h-4" /> <path d="M3 13v-2" /> <path d="M8.464 8.464l-2.828 -2.828" />
  <path d="M4.929 6.343l1.414 -1.413" />
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
