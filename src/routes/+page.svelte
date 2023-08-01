<script>
	export let data;

	const { posts } = data;
</script>

<h1>Posts</h1>

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
