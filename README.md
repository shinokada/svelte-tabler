
# Svelte Tabler

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor"></a>
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-tabler" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-tabler" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-tabler" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-tabler.svg" alt="npm"></a>
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

## Props

- size = ctx.size || '16';
- role = ctx.role || 'img';
- color = ctx.color || 'currentColor';
- strokeWidth = ctx.strokeWidth || '2';
- ariaLabel = 'file name';

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


## Setting Global Icon using setContext

You can establish global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components. Here's how you can do it:

```html
<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    size: '100', // Icon size in pixels
    color: '#ff4488', // Icon color in hexadecimal or CSS color name
    strokeWidth: "1"
  };
  setContext('iconCtx', iconCtx);
</script>
```

The `size`, `color`, `role`, and other properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

If you set `size`, icons can be customized with different colors. For example:

```html
<script>
  import { setContext } from 'svelte';
  import { Folders } from 'svelte-tabler';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<Folders color="#ff4488" />
```

Remember that you can set only one or two of these properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.

## Creating a Default Icon Setting

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
      color: string;
    };
    config2: {
      size: number;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, AddressBook, Adjustments } from 'svelte-tabler';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{AddressBook}" />
<Icon {...config2} icon="{Adjustments}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-tabler';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { AddressBook } from 'svelte-tabler';
</script>

<MyIcon icon="{AddressBook}" />
```

Here, we import the `MyIcon` component and the `AddressBook` icon. By passing the `AddressBook` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

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
