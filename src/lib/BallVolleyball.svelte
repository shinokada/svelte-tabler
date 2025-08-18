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
		ariaLabel = 'ball volleyball',
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
	<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M12 12a8 8 0 0 0 8 4" />
	<path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" /> <path d="M12 12a8 8 0 0 0 -7.464 4.928" />
	<path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" /> <path d="M12 12a8 8 0 0 0 -.536 -8.928" />
	<path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
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
@prop ariaLabel = 'ball volleyball'
@prop ...restProps
-->
