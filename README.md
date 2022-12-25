<h1 align="center">Svelte-Tabler</h1>

<p align="center">
<a href="https://svelte-tabler.codewithshin.com/">Svelte-Tabler</a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-tabler" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-tabler" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-tabler.svg" alt="npm"></a>
</p>

1970+ SVG [Tabler Icons](https://github.com/tabler/tabler-icons) components for Svelte. Svelte-Tabler support major CSS frameworks using the `class` props.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler2.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler3.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler4.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler5.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-tabler/main/static/images/tabler6.webp" />
</p>

## Installation

```sh
npm i -D svelte-tabler
```

## Icon name list

[Icon list](https://github.com/shinokada/svelte-tabler/blob/main/icon-list.md)

## REPL

- [Demo 1](https://svelte.dev/repl/55ccaffe3d414235a6bb554ffd98f4bc)
- [Demo 2](https://svelte.dev/repl/b63ed92a79a047bdb2017fac63624130)

## Usages

In a svelte file:

```html
<script>
  import { Folders, GitMerge } from 'svelte-tabler';
</script>

<Folders />
<GitMerge />
```

## Size

Use the `size` prop to change the size of icons.

```html
<Folders size="40" /> <GitMerge size="40" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Folders color="#c61515" /> <GitMerge color="#3759e5" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

Tailwind CSS example:

```html
<Folders class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<Folders class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Folders class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `FolderMinus` has `aria-label="folder minux"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<FolderMinus ariaLabel="folder minux svg icon" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<FolderMinus tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { FolderMinus } from 'svelte-tabler';
</script>

<svelte:component this="{FolderMinus}" />
```

## Using onMount

```html
<script>
  import { FolderMinus } from 'svelte-tabler';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new FolderMinus({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-tabler`.

```html
<script>
  import * as Icon from 'svelte-tabler';
</script>

<Icon.FolderMinus />
<Icon.GitMerge />

<h1>Size</h1>
<Icon.FolderMinus size="30" />
<Icon.GitMerge size="40" />

<h1>CSS HEX color</h1>
<Icon.GitMerge color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.FolderMinus class="text-blue-500" />
<Icon.GitMerge class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
