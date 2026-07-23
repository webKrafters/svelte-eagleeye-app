<script lang="ts">
    import { useEagleEye } from '@webkrafters/svelte-eagleeye';
	
	import { CTX_DESC, FULL_STATE_SELECTOR, type TestState } from '$lib/context';

	const ctx = useEagleEye<TestState>( CTX_DESC );
	
	const { resetState } = ctx.stream( 'RESET' );

	const reset = () => resetState([ FULL_STATE_SELECTOR ]);

	$effect(() => console.log( 'Reset component rendered.....' ));

</script>

<button class="reset-btn" onclick={ reset }>reset context</button>


<style scoped>
	.reset-btn {
		border: 1px solid var( --aquamarine );
		background-color: var( --aquamarine );
		border-radius: 4px;
		color: #fff;
		cursor: pointer;
		font-size: .85rem;
		font-weight: 700;
		padding: 7px 20px;
		&:hover {
			background-color: var( --navy );
			border: 1px solid var( --navy );
		}
	}
</style>
