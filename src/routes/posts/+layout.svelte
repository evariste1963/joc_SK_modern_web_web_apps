<script>
	export let data;

	const postsArr = data.posts.sort((a, b) => 0.5 - Math.random());
	const posts = postsArr.slice(0, Math.round(Math.random() * 10) + 2); //Random number of random Posts to a maximum of 12 and minimum of 2 Posts
</script>

<div class="layout">
	<aside>
		<nav>
			<h4>Latest Posts</h4>

			<ul>
				<ul>
					{#each posts as { slug, title }}
						<li>
							<a href="/posts/{slug}">{title}</a>
						</li>
					{/each}
				</ul>
			</ul>
		</nav>
	</aside>

	<main>
		<slot />
	</main>
</div>

<style>
	aside {
		border: 2px solid #383737;
		padding: 1em;
		border-radius: 2em;
	}
	nav {
		display: grid;
		grid-column: 1;
		/*gap: 2rem;*/
	}
	.layout {
		display: grid;
		gap: 2.5rem;
		grid-template-columns: minmax(auto, 25%) minmax(auto, 55%);
		margin-top: 2rem;
	}
</style>
