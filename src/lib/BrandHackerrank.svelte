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
    ariaLabel = 'brand hackerrank',
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
    d="M19.484 5.667c-1.146 -.904 -3.35 -2.394 -6.497 -3.429c-.484 -.159 -.725 -.238 -1.04 -.238c-.314 0 -.556 .08 -1.04 .238c-3.147 1.035 -5.35 2.525 -6.496 3.43c-.402 .317 -.604 .476 -.797 .816c-.194 .341 -.233 .62 -.309 1.178a33 33 0 0 0 -.305 4.338c0 1.742 .165 3.317 .305 4.338c.076 .558 .115 .837 .309 1.178c.193 .34 .395 .5 .797 .817c1.146 .904 3.35 2.394 6.497 3.429c.483 .159 .725 .238 1.04 .238c.314 0 .555 -.08 1.04 -.238c3.146 -1.035 5.35 -2.525 6.496 -3.43c.402 -.317 .603 -.476 .797 -.816c.194 -.341 .232 -.62 .309 -1.178c.14 -1.021 .305 -2.596 .305 -4.338s-.165 -3.317 -.305 -4.338c-.077 -.558 -.115 -.837 -.309 -1.178s-.395 -.5 -.797 -.817"
  /> <path d="M9 8v7" /> <path d="M9 12h6" /> <path d="M16 16h-2l1 1z" /> <path d="M8 8h2l-1 -1z" />
  <path d="M15 9v7" />
</svg>
