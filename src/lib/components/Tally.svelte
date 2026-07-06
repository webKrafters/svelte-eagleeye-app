<script lang="ts">
	import isEmpty from 'lodash.isempty';

	import { use } from '$lib//context';
	import CapitalizedDisplay from '$lib/components/CapitalizedDisplay.svelte';
	import CustomerPhoneDisplay from '$lib/components/CustomerPhoneDisplay.svelte';
	import Reset from '$lib/components/Reset.svelte';

	const ctx = use();
	
	const { data } = ctx.stream( 'TALLY', {
		color: 'color',
		name: 'customer.name',
		price: 'price',
		type: 'type'
	});
	
	$effect(() => console.log( 'TallyDisplay component rendered.....' ));
</script>

<div style="margin: 20px 0 10px">
	<div style="float: left; font-size: 1.75rem">
		{ 'Customer: ' }
		{#if !isEmpty( data.name.first ) || !isEmpty( data.name.last ) }
			<div style="display: inline-block">
				<CapitalizedDisplay text={ data.name.first } />
				{ ' ' }
				<CapitalizedDisplay text={ data.name.last } />
			</div>
		{ :else }
			<span>n.a.</span>
		{ /if }
	</div>
	<div style="clear: both; padding-left: 3px">
		<CustomerPhoneDisplay />
	</div>
	<table>
		<tbody>
			<tr>
				<td><label>Type:</label></td>
				<td>
					{#if ( data.type ?? '' ).length }
						<CapitalizedDisplay text={ data.type } />
					{ :else }
						n.a.
					{ /if }
				</td>
			</tr>
			<tr>
				<td><label>Color:</label></td>
				<td>
					{#if ( data.color ?? '' ).length }
						<CapitalizedDisplay text={ data.color } />
					{ :else }
						n.a.
					{ /if }
				</td>
			</tr>
			<tr><td><label>Price:</label></td><td>{ data.price.toFixed( 2 ) }</td></tr>
		</tbody>
	</table>
	<div style="text-align: right">
		<Reset />
	</div>
</div>
