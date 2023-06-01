<h1 align="center">Svelte Tabler</h1>

<p align="center">
<a href="https://svelte-tabler.codewithshin.com/">Svelte-Tabler</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-tabler" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-tabler" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-tabler.svg" alt="npm" height="25"></a>
</p>

1970+ SVG [Tabler Icons](https://github.com/tabler/tabler-icons) components for Svelte. Svelte-Tabler support major CSS frameworks using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

<p align="center">
<img width="650" src="/static/images/tabler-optimized-650-1050.png" />
</p>

## Installation

```sh
npm i -D svelte-tabler
```

## Icon names

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

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

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Folders from 'svelte-tabler/Folders.svelte';
</script>

<Folders />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

As of March 2023, the `typescript@beta` version is now available:

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '16';
- role = 'img';
- color = 'currentColor';
- ariaLabel = 'icon file name';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

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

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<FolderMinus tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

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

## PWA: Fast & Offline

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
