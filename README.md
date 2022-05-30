# Svelte-Tabler

[![npm version](https://badgen.net/npm/v/svelte-tabler)](https://www.npmjs.com/package/svelte-tabler)
[![license](https://badgen.net/npm/license/svelte-tabler)](https://github.com/shinokada/svelte-tabler/blob/main/LICENSE)

1970+ SVG [Tabler Icons](https://github.com/tabler/tabler-icons) components for Svelte. Svelte-Tabler support major CSS frameworks using the `class` props.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler2.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler3.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler4.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler5.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler6.webp" />
</p>

## Icon name list

[Icon list](https://github.com/shinokada/svelte-tabler/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-tabler
```

## REPL

[Demo](https://svelte.dev/repl/60e7000b54004872aa4006535fcef7fd?version=3.48.0)

## Usages

In a svelte file:

```html
<script>
	import {
		BankFillBUILDINGS,
		MailDownloadFillBUSINESS,
		InboxUnarchiveLineBUSINESS
	} from 'svelte-tabler';
</script>

<BankFillBUILDINGS />
<MailDownloadFillBUSINESS />
<InboxUnarchiveLineBUSINESS />
```

## Size

Use the `size` prop to change the size of icons.

```html
<BankFillBUILDINGS size="40" />
<MailDownloadFillBUSINESS size="40" />
<InboxUnarchiveLineBUSINESS size="40" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<BankFillBUILDINGS color="#c61515" />
<MailDownloadFillBUSINESS color="#3759e5" />
<InboxUnarchiveLineBUSINESS color="#3fe537" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

Tailwind CSS example:

```html
<BankFillBUILDINGS class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<BankFillBUILDINGS class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<BankFillBUILDINGS class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `BankFillBUILDINGS` has `aria-label="bank fill buildings"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<BankFillBUILDINGS ariaLabel="bank buildings svg icon" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<BankFillBUILDINGS tabindex="0" />
```

## Using svelte:component

```html
<script>
	import { BankFillBUILDINGS } from 'svelte-tabler';
</script>

<svelte:component this="{BankFillBUILDINGS}" />
```

## Using onMount

```html
<script>
	import { BankFillBUILDINGS } from 'svelte-tabler';
	import { onMount } from 'svelte';
	const props = {
		size: '50',
		color: '#ff0000'
	};
	onMount(() => {
		const icon = new BankFillBUILDINGS({ target: document.body, props });
	});
</script>
```

## Import all

Use `import * as Icon from 'svelte-tabler`.

```html
<script>
	import * as Icon from 'svelte-tabler';
</script>

<Icon.BankFillBUILDINGS />
<Icon.MailDownloadFillBUSINESS />

<h1>Size</h1>
<Icon.BankFillBUILDINGS size="30" />
<Icon.MailDownloadFillBUSINESS size="40" />

<h1>CSS HEX color</h1>
<Icon.BankFillBUILDINGS color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.BankFillBUILDINGS class="text-blue-500" />
<Icon.MailDownloadFillBUSINESS class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)