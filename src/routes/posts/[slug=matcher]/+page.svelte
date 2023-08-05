<script>
	/* matching url slug using Matcher & regex  [[slug=matcher]] which in this instance uses matcher.js file in src dir -- lowercase a-z and 0-9  and - allowed here
--> folder/file names are arbitry*/

	// 	import { page } from '$app/stores';
	// 	const titleFromSlug = $page.params.slug.split('-').join(' ');
	//
	export let data;

	$: ({ title, createAt, content, reactions } = data.post); //this is for the featured Post

	// this is for the related posts
	$: postsArr = data.posts
		.sort((a, b) => 0.5 - Math.random()) //shuffles the order of the original array
		.filter((post) => post.title !== data.post.title); // removes the current featured pos from the array
	$: posts = postsArr.slice(0, Math.round(Math.random() * 12)); //selects a random number of posts from the array

	function formatDate(date) {
		return new Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(date);
	}
</script>

<hgroup>
	<h1>{title}</h1>
	<h2>{formatDate(createAt)}</h2>
</hgroup>

<div class="content">
	{@html content}
	<p class="reactions">reactions: {reactions}</p>
</div>

<div class="posts">
	<h3>Related Posts</h3>
	{#if posts.length > 0}
		<ul>
			{#each posts as { slug, title }}
				<li>
					<a href="/posts/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p style="font-style:italic">
			sorry, there are no related posts, please select from the sidebar
		</p>
	{/if}
</div>

<!-- this would be from the parentData in +page.Server.js -->

<!-- <section>
	<ul>
		{#each data.parentData.posts as { slug, title }}
			<li>
				<a href="/posts/{slug}">{title}</a>
			</li>
		{/each}
	</ul>
</section> -->

<style>
	.content {
		text-align: justify;
		min-height: 10em;
	}
	.reactions {
		margin-top: 0.2rem;
		font-style: italic;
		color: var(--muted-color);
		font-size: 0.9rem;
	}

	.posts {
		border: 2px solid #383737;
		padding: 1em;
		border-radius: 2em;
	}
</style>
