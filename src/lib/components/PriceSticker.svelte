<script lang="ts">
    import { useEagleEye } from '@webkrafters/svelte-eagleeye';

	import { CTX_DESC, type TestState } from '$lib/context';

	const ctx = useEagleEye<TestState>( CTX_DESC );

	const { data } = ctx.stream( 'PRODUCT_STICKER', { p: 'price' } as const );
	
	const pOutput = $derived( data.p.toFixed( 2 ) );

	$effect(() => console.log( 'ProductDescription component rendered.....' ));
</script>

<div style="font-size: 36px; font-weight: 800">
	${ pOutput }
</div>
