import type { MetaProps } from 'runes-meta-tags';

const title = 'Setting Global Icon - Svelte Tabler';
const description = 'How to create a global icon using setContext with Svelte Tabler';
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
