import { getContext, setContext } from 'svelte';

import { browser } from '$app/env';

// @debug
import { createEagleEye, EagleEyeContext } from '$lib/__EAGLEEYE__';
// import { createEagleEye } from '@webkrafters/svelte-eagleeye';

// @debug
export { FULL_STATE_SELECTOR } from '$lib/__EAGLEEYE__';
// export { FULL_STATE_SELECTOR } from '@webkrafters/svelte-eagleeye';

export const defaultState = {
	color: 'Burgundy',
	customer: {
		name: {
			first: null as unknown as string,
			last: null as unknown as string
		},
		phone: null as unknown as string
	},
	price: 22.5,
	type: ''
};

export type TestState = typeof defaultState;

const CTX_KEY = 'CURR_ORDER';

const create = (() => {
	let ctx : EagleEyeContext<TestState>;
	return ( value : TestState ) => {
		if( !browser || !ctx ) {
			ctx = createEagleEye( value );
		}
		return ctx;
	};
})();


export const provide = ( initValue : TestState, key = CTX_KEY ) => setContext( key, create( initValue ) );

export const use = ( key = CTX_KEY ) => getContext<ReturnType<typeof create>>( key );

