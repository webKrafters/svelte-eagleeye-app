import type { SelectorMap, State } from '.';

import { MemoryChannel } from './channel/memory/index.svelte';

import { SvelteEagleEye } from './base';

export class MemorySvelteEagleEye<T extends State> extends SvelteEagleEye<T> {
	get stream() {
		const stream = this.baseStream;
		return <const S extends SelectorMap>(
			ownerDesc : string,
			selectorMap? : S
		) => new MemoryChannel<T, S>( stream, selectorMap! ).store;
	}
}
