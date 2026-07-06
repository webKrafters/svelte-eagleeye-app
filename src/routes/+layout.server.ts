import { defaultState } from '$lib/context';

export const load = async () => ({ defaultState: { ...defaultState } });
