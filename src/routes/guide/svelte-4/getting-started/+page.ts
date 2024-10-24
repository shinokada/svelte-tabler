import type { PageLoad } from './$types';
import type { MetaProps } from 'runes-meta-tags';

interface Versions {
  v1: string | undefined;
  v2: string | undefined;
}

const title = 'Getting Started - Svelte Tabler v1';
const description = 'How to get started with Svelte Tabler v1';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-tabler';

export const load = (async () => {
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

  try {
    const response = await fetch('https://registry.npmjs.org/svelte-tabler');
    const data = await response.json();
    const allVersions = Object.keys(data.versions);
    
    const sortedVersions = allVersions.sort((a, b) => {
      return -a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
    
    const latestV1 = sortedVersions.find(v => v.startsWith('1'));
    const latestV2 = sortedVersions.find(v => v.startsWith('2'));

    return {
      pageMetaTags,
      versions: {
        v1: latestV1,
        v2: latestV2
      } satisfies Versions
    };
  } catch (error) {
    return {
      pageMetaTags,
      versions: {
        v1: undefined,
        v2: undefined
      } satisfies Versions,
      error: 'Failed to fetch versions'
    };
  }
}) satisfies PageLoad;