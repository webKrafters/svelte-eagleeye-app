import type { Handle } from '@sveltejs/kit';

import {
	allKeysIn,
	FULL_STATE_SELECTOR,
	type RequestToken
} from '@webkrafters/svelte-eagleeye';

import { useDemoContext } from '$lib/context';

export const handle : Handle = async ({ event, resolve }) => {
 	event.locals.requestToken = { _id: crypto.randomUUID() } as RequestToken;
  	const response = await resolve( event );
	console.log(
		JSON.stringify(
			useDemoContext( event.locals.requestToken ).store.getState([ FULL_STATE_SELECTOR ]),
			null,
			2
		)
	);
	console.log(
		'ALL CONTEXT NAMES USED: ',
		allKeysIn( event.locals.requestToken )
	);
	return response;
}
