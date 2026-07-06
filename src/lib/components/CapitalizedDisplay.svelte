<script lang="ts">

	const { text = '' } = $props();

	const t = $derived.by(() => {
		let _t = text.slice();
		return `${ _t.charAt( 0 ).toUpperCase() }${ _t.slice(  1 ) }`;
	});

	$effect(() => console.log( `CapitalizedDisplay( ${ text } ) component rendered.....` ));

</script>

{ t }
