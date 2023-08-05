<script>
	import { invalidate, invalidateAll } from '$app/navigation';

	export let data;

	$: ({ posts } = data); // dynamic variable required in order for rerunLoadFunction to run

	function rerunLoadFunction() {
		//methods
		//1. invalidate -- variable url
		invalidate('posts'); //this is from 'depends' in routes.+page.js

		// //2. invalidate -- stable url
		// invalidate('api/posts')

		// //3 invalidate -- using 'includes' to search
		// invalidate(url => url.href.includes('posts'))

		// // 4. invalidateAll -- nuclear option

		// invalidateAll()
	}
</script>

<h1>Posts</h1>

<button on:click={rerunLoadFunction}>Get More Posts</button>

<p>
	showing {posts.length} posts
</p>

<ul>
	{#each posts as { slug, title }}
		<li>
			<a href="/posts/{slug}">{title}</a>
		</li>
	{/each}
</ul>

<style>
</style>
