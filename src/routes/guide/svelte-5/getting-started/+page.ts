import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Tabler v3';
const description = 'How to get started with Svelte Tabler v3';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-tabler';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
