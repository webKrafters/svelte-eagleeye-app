<script lang="ts">
    import { getDemoContext } from '$lib/context';

	const { data } = getDemoContext().stream( 'PRODUCT_STICKER', { p: 'price' } as const );
	
	const pOutput = $derived( data.p.toFixed( 2 ) );

	$effect(() => console.log( 'ProductDescription component rendered.....' ));
</script>

<div style="font-size: 36px; font-weight: 800">
	${ pOutput }
</div>
