import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_ICONS } from '$env/static/private';
import { metaTitle, metaDescription, metaImg } from 'runes-meta-tags';

export const load = ({ url }) => {
  const siteName = metaTitle('/', __NAME__);
  const title = metaTitle(url.pathname, __NAME__);
  const basicDesc = '5290+ Tabler outline SVG icon components for Svelte'
  const description = metaDescription(url.pathname, basicDesc);
  const image = metaImg(url.pathname, __NAME__);
  const keywords = 'svelte, sveltekit, tabler icons, svg icons, icons';
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image,
      imageAlt: title,
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_ICONS
  };
};
