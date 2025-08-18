import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_ICONS } from '$env/static/private';

const title = 'Svelte Tabler';
const description = '5290+ Tabler outline SVG icon components for Svelte 4, 5, and Runes';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-tabler';
const keywords = 'svelte, sveltekit, tabler icons, svg icons, icons';

export const load = ({ url }) => {
	const layoutMetaTags: MetaProps = {
		title,
		description,
		keywords,
		twitter: {
			card: 'summary_large_image',
			site: '@shinokada',
			creator: '@shinokada',
			title,
			description,
			image: imgUrl,
			imageAlt: title
		},
		og: {
			type: 'website',
			title,
			description,
			url: url.href,
			image: imgUrl,
			imageAlt: title,
			siteName: title,
			imageWidth: '1200',
			imageHeight: '630'
		}
	};
	return {
		layoutMetaTags,
		ANALYTICS_ID_ICONS
	};
};
