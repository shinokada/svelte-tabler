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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  <path d="M10.586 10.586l-1.586 -1.586" /> <path d="M13.414 10.586l1.586 -1.586" />
  <path d="M13.414 13.414l1.586 1.586" /> <path d="M10.586 13.414l-1.586 1.586" />
  <path d="M14 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" /> <path d="M16.5 4.206l-.5 .866" />
  <path d="M7.5 19.794l.5 -.866" /> <path d="M19.794 7.5l-.866 .5" />
  <path d="M4.206 16.5l.866 -.5" /> <path d="M7.5 4.206l.5 .866" />
  <path d="M16.5 19.794l-.5 -.866" /> <path d="M4.206 7.5l.866 .5" />
  <path d="M19.794 16.5l-.866 -.5" /> <path d="M12 3v1" /> <path d="M12 21v-1" />
  <path d="M21 12h-1" /> <path d="M3 12h1" /> <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
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
