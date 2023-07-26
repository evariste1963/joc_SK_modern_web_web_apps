//import { ParamMatcher } from '@sveltejs/kit';

export const match = (param) => {
	return /^[a-z)-9-]+$/.test(param);
};
