<script lang="ts">

	import { use } from '$lib/context';

  	import ProductDescription from '$lib/components/CustomerPhoneDisplay.svelte';
 	import Reset from '$lib/components/Reset.svelte';

	const ctx = use();

	const { data } = ctx.stream( 'ABOUT_PAGE',  { type: 'type' });

	const type = $derived( ( data.type ?? '' ).length ? data.type : 'n.a.' ); 
</script>

<div class="about">
	<h1>A bit about { type }</h1>
	<ProductDescription />
	<div style="margin-top: 2rem">
		<Reset /> entirely from here!
	</div>
</div>
