<script lang="ts">

	import { untrack } from 'svelte';

	import { provideDemoContext, type TestState } from '$lib/context';

	import favicon from '$lib/assets/favicon.svg';
	import wkLogo from '$lib/assets/wklogo-outline.png';

	import '$lib/assets/main.css';

	const { data, children } = $props();

	const { demoCtxValue, requestToken } = untrack( () => data );
	const ctx = provideDemoContext( demoCtxValue, requestToken );

	const commit = ( type : string ) => ctx.store.setState({ type } as TestState );

  	const title = '@webkrafters/svelte-eagleeye demo';
	const updateType = ( e : KeyboardEvent ) => commit( ( e.target as HTMLInputElement ).value );
  	const year = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="icon" href={ favicon } />
</svelte:head>

<div class="app">
	<div>
		<h1>
			<img src={ wkLogo } alt="wk logo" width="80" height="80" />
			<p>
				<span>{ title }</span>
				<a
				href="https://www.npmjs.com/package/@webkrafters/svelte-eagleeye"
				rel="no-follow"
				>
					Eagle Eye
				</a>
			</p>
		</h1>
		<main class="page-wrapper">
			<h1>Demo</h1>
			<h2>A contrived product app.</h2>
			<nav>
				<a href="/">Home</a>
				<a href="/about">Product</a>
			</nav>
			<div style="margin-bottom: 10px">
				<label>Type: <input onkeyup={ updateType } placeholder="override product type here..." /></label>
			</div>
			{@render children()}
		</main>
	</div>
	<footer>
		<span>&copy;2026</span>
		{ year > 2026 ? `-${ year } ` : ' ' }
		<a href="https://webkrafters.tech" rel="no-follow">webKrafters</a>. All rights reserved.
	</footer>
</div>

<style>
.app {
	--aquamarine: #1890ee;
	--brand-font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	--grey: #333;
	--navy: #0d4aa6;
	display: flex;
	flex-direction: column;
	min-height: 98.7vh;
	a {
		color: var( --aquamarine );
		&:hover {
			color: var( --navy )
		}
	}
	> div {
		flex: 1 1 auto;
		> h1:first-of-type {
			&::after {
				color: #d44;
				content: 'Open browser console > Fill in the textboxes below > Monitor resulting rendering activities.';
				font-family:  var( --brand-font-family );
				font-size: 1rem;
				left: 0;
				position: absolute;
				top: 100%;
			}
			align-items: center;
			color:  var( --grey );
			display: flex;
			font-family: var( --brand-font-family );
			font-size: 1.725rem;
			margin-top: 0;
			position: relative;
			> img {
				height: 80px;
				margin-right: 16px;
				width: 80px;
			}
			> p {
				margin: 0;
				> * {
					display: block;
					line-height: .95;
				}
				> a {
					font-size: 1.4rem;
					font-style: italic;
					font-variant: all-small-caps
				}
			}
		}
		> main {
			clear: both;
      > nav {
        align-items: self-start;
        display: flex;
        height: 3rem;
        justify-content: space-evenly;
      }
		}
	}
	> footer {
		font-family: var( --brand-font-family );
		flex: 0 0 10px;
		text-align: right;
	}
}
</style>

