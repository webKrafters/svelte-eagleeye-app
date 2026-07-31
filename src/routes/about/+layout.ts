import { defaultState } from '$lib/context';

export const load = async ({ data }) => ({ defaultState, ...( data ?? {} ) });

