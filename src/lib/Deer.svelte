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
		ariaLabel = 'deer',
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
	<path d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3" /> <path d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3" />
	<path d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6" />
	<path d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0" />
	<path d="M17 3c0 1.333 -.333 2.333 -1 3" /> <path d="M7 3c0 1.333 .333 2.333 1 3" />
	<path d="M7 6c-2.667 .667 -4.333 1.667 -5 3" /> <path d="M17 6c2.667 .667 4.333 1.667 5 3" />
	<path d="M8.5 10l-1.5 -1" /> <path d="M15.5 10l1.5 -1" /> <path d="M12 15h.01" />
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
@prop ariaLabel = 'deer'
@prop ...restProps
-->
