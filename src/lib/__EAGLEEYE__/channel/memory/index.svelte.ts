import type { BaseStream, SelectorMap, State } from '../..';

import { onDestroy, onMount } from 'svelte';

import { Channel } from '../base.svelte';

export class MemoryChannel<
	T extends State, 
	const S extends SelectorMap
> extends Channel<T, S>{
	constructor( stream : BaseStream<T>, selectorMap : S ) {
		super( stream, selectorMap );
		const sync = this.synchronizer;
		onMount(() => this.channel.addListener( 'data-changed', sync ));
		onDestroy(() => {
			this.channel.removeListener( 'data-changed', sync );
			this.channel.endStream();
		});
		sync();
	}
}
