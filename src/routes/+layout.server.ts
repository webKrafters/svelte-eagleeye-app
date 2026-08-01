import { defaultState } from '$lib/context';

export const load = async ({ locals }) => {
	const myState = { ...defaultState };
	myState.customer.name.first = 'Dart';
	myState.customer.name.last = 'Vader';
	myState.type = 'Wand Stopper' + `__${ Date.now() }.`;
	return {
		demoCtxValue: myState,
		requestToken: locals.requestToken
	};
};
