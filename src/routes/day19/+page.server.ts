import type { PageServerLoad } from './$types';
import svelteConfig from '../../../svelte.config';

export const load: PageServerLoad = async () => {
	return {
		bundleStrategy: svelteConfig.kit?.output?.bundleStrategy
	};
};
