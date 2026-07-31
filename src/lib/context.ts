import { getContext, setContext } from 'svelte';

import {
	createEagleEye,
	FULL_STATE_SELECTOR,
	SvelteEagleEye,
	useEagleEye,
	type RequestToken
} from '@webkrafters/svelte-eagleeye';

export { FULL_STATE_SELECTOR };

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

export const CTX_DESC = 'Demo';

export function createDemoContext(
	value = defaultState,
	requestToken? : RequestToken
) {
	return createEagleEye({ value, CTX_DESC, requestToken });
}

/**
 * Compatible with the component init script environment only.
 * In non-component init script, use the `useDemoConext(...)` instead.
 */
export function getDemoContext(){ return getContext<SvelteEagleEye<TestState>>( CTX_DESC ) };

/**
 * Compatible with the component init script environment only.
 * In non-component init script, use the `createDemoConext(...)` instead.
 */
export function setDemoContext( context : SvelteEagleEye<TestState> ){ return setContext( CTX_DESC, context) };

export function useDemoContext( requestToken? : RequestToken ){
	return useEagleEye({ CTX_DESC, requestToken }) as SvelteEagleEye<TestState>;
}

/**
 * Compatible with the component init script environment only.
 * In non-component init script, use the `createDemoConext(...)` instead.
 */
export function provideDemoContext (
	value = defaultState,
	requestToken? : RequestToken
) {
	let ctx = getDemoContext();
	if( !!ctx ) { return ctx }
	ctx = createDemoContext( value, requestToken ).value;
	setDemoContext( ctx );
	return ctx;
}
