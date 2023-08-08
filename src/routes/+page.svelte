<script>
	import { invalidate, invalidateAll } from '$app/navigation';

	export let data;

	$: ({ posts } = data); // dynamic variable required in order for rerunLoadFunction to run

	function rerunLoadFunction() {
		//methods - these will rerun the load functions without refreshing the page, only the data
		//1. invalidate -- variable url
		invalidate('posts'); //this is from 'depends' in routes.+page.js

		// //2. invalidate -- stable url -- WON'T WORK IN OUR INSTANCE
		// invalidate('api/posts')

		// //3 invalidate -- using 'includes' to search
		// invalidate(url => url.href.includes('posts'))

		// // 4. invalidateAll -- nuclear option try to avoid as all load function will rerun

		// invalidateAll()
	}
</script>

<h1>Posts</h1>

<button style="width:20em; border-radius:0 40%" on:click={rerunLoadFunction}>Refresh Posts</button>

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
