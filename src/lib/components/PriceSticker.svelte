<script lang="ts">
	import { use } from '$lib/context';

	const ctx = use();

	const { data } = ctx.stream( 'PRODUCT_STICKER', { p: 'price' } as const );
	
	const pOutput = $derived( data.p.toFixed( 2 ) );

	$effect(() => console.log( 'ProductDescription component rendered.....' ));
</script>

<div style="font-size: 36px; font-weight: 800">
	${ pOutput }
</div>
