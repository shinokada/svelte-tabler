import type { Component } from 'svelte';
import { type ListType, sidebarList, ExpandOutline, GridPlusOutline } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Icons',
    Icon: ExpandOutline as Component,
    href: '/icons'
  },
  {
    name: 'Icon sets',
    Icon: GridPlusOutline as Component,
    href: 'https://svelte-svg-icons.codewithshin.com/'
  }
];

export const newSidebarList: ListType[] = [
  ...(Array.isArray(sidebarList) ? sidebarList : []),
  ...extra
];
