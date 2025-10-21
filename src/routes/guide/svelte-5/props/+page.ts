import type { MetaProps } from 'runes-meta-tags';

const title = 'Props - Svelte Tabler v3';
const description = 'How to use Svelte Tabler v3 props';
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
