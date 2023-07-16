# Svelte Tabler

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-tabler" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-tabler" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-tabler.svg" alt="npm" height="25"></a>
</div>

1970+ SVG [Tabler Icons](https://github.com/tabler/tabler-icons) components for Svelte. 

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on [the GitHub sponsor](https://github.com/sponsors/shinokada). Your support helps me maintain and improve this package for the benefit of the community.


## Repo

[GitHub Repo](https://github.com/shinokada/svelte-tabler)

## Original source

[tabler/tabler-icons](https://github.com/tabler/tabler-icons)

## License

[Svelte-Tabler License](https://github.com/shinokada/svelte-tabler/blob/main/LICENSE)

[tabler/tabler-icons LICENSE](https://github.com/tabler/tabler-icons/blob/master/LICENSE)

## Installation

```sh
pnpm i -D svelte-tabler
```

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

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<Folders class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Folders color="#c61515" /> <GitMerge color="#3759e5" />
```

## CSS framworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

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

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
