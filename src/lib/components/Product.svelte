<script lang="ts">

	import { type TestState, use } from '../context';

	import Editor from './Editor.svelte';
	import Tally from './Tally.svelte';
	import ProductDescription from './ProductDescription.svelte';
	import PriceSticker from './PriceSticker.svelte';

	const ctx = use();

	const { data, setState } = ctx.stream( 'PRODUCT', { price: 'price' } as const );

	const overridePricing = (( e : KeyboardEvent ) => {
		setState({ price: +( e.target as HTMLInputElement ).value } as unknown as TestState );
	});

	$effect(() => console.log( 'Product component rendered.....' ));

</script>

<div>
	<div style="margin-bottom: 10px">
		<label>$ <input value={ data.price } onkeyup={ overridePricing } type="number" placeholder="override price here..."/></label>
	</div>
	<div>
		<div style="border-bottom: 1px solid #333; margin-bottom: 10px; padding-bottom: 5px">
			<Editor />
			<Tally />
		</div>
		<ProductDescription />
		<PriceSticker />
	</div>
</div>
