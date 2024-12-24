import type { PageServerLoad } from './$types';
import { SVELTE_CONFIG_OUTPUT_BUNDLE_STRATEGY } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		bundleStrategy: SVELTE_CONFIG_OUTPUT_BUNDLE_STRATEGY
	};
};
