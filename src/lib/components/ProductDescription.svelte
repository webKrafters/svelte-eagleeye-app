<script lang="ts">
   	import { getDemoContext } from '$lib/context';
	
	import CapitalizedDisplay from '$lib/components/CapitalizedDisplay.svelte';
	
	const { data } = getDemoContext().stream( 'PROD_DESC', {
		c: 'color',
		t: 'type'
	});

	$effect(() => console.log( 'ProductDescription component rendered.....' ));
</script>

<div style="font-size: 24px">
	<strong>Description:</strong>
	{ ' ' }

	{#if ( data.t ?? '' ).length > 0 }
		<span style="display: inline-block">
			<CapitalizedDisplay text={ data.c } />
			{ ' ' }
			<CapitalizedDisplay text={ data.t } />
		</span>
	{ :else }
		<span>n.a.</span>
	{ /if }
</div>
