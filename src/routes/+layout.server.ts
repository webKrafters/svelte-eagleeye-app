import { defaultState } from '$lib/context';

const myState = { ...defaultState };
myState.customer.name.first = 'Dart';
myState.customer.name.last = 'Vader';
myState.type = 'Wand Stopper';
export const load = async () => ({ defaultState: myState });
