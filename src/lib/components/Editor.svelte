<script lang="ts">
   import { getDemoContext, type TestState } from '$lib/context';

	const { setState } = getDemoContext().stream( 'EDITOR' );
	
	let color = $state( '' );
	let first = $state( '' );
	let last = $state( '' );
	let phone = $state( '' );
	let price = $state( 0.00 );
	let type = $state( '' );

	const updateColor = () => setState({ color } as TestState );
	const updateName = () => setState({ customer: { name: { first, last } } });
	const updatePhone = () => setState({ customer: { phone } } as TestState );
	const updatePrice = () => setState({ price } as TestState );
	const updateType = () => setState({ type } as TestState );

	$effect(() => console.log( 'Editor component rendered.....' ));

</script>

<fieldset style="margin: 10px 0">
	<legend>Editor</legend>
	<h3 style="margin: 0.5rem 0">Customer:</h3>
	<div style="float: left, margin: 10px 0">
		<input bind:value={ first } placeholder="First name" />
		{ ' ' }
		<input bind:value={ last } placeholder="Last name" />
		{ ' ' }
		<button onclick={ updateName }>update customer</button>
	</div>
	<div style="clear: both; margin: 10px 0">
		<label>New Phone: <input
			maxLength="10"
			placeholder="Empty or 10-digit integer"
			bind:value={ phone }
			type="number"
		/></label>
		{ ' ' }
		<button onclick={ updatePhone }>update phone</button>
	</div>
	<hr style="margin: 1.5rem 0" />
	<div style="margin: 10px 0">
		<label>New Price: <input bind:value={ price } type="number" /></label>
		{ ' ' }
		<button onclick={ updatePrice }>update price</button>
	</div>
	<div style="margin: 10px 0">
		<label>New Color: <input bind:value={ color } /></label>
		{ ' ' }
		<button onclick={ updateColor }>update color</button>
	</div>
	<div style="margin: 10px 0">
		<label>New Type: <input bind:value={ type } /></label>
		{ ' ' }
		<button onclick={ updateType }>update type</button>
	</div>
</fieldset>
