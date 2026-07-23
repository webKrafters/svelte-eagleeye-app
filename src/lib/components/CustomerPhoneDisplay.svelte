<script lang="ts">
    import { useEagleEye } from '@webkrafters/svelte-eagleeye';

	import { CTX_DESC, type TestState } from '$lib/context';

	const ctx = useEagleEye<TestState>( CTX_DESC );

	const { data } = ctx.stream( 'CUST_PHONE', { phone: 'customer.phone' } as const );

	const phone = $derived.by(() => {
		let { phone: p } = data;
		if( !p ) { return 'n.a.' }
		p = `${ p }`;
		return `(${ p.slice( 0, 3 ) }) ${ p.slice( 3, 6 ) }-${ p.slice( 6, 10 ) }`;
	})

	$effect(() => console.log( 'Reset component rendered.....' ));

</script>

<span>Phone: { phone }</span>


