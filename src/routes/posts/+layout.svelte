<script>
	export let data;

	$: ({ posts } = data);
</script>

<div class="layout">
	<aside>
		<nav>
			<h4>Posts</h4>
			<ul>
				{#each posts as { slug, title }}
					<li>
						<a href="/posts/{slug}">{title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>

	<main>
		<slot />
	</main>
</div>

<style>
	nav {
		display: grid;
		grid-column: 1;
		gap: 2rem;
	}
	.layout {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px 60ch;
		margin-top: 2rem;
	}
</style>
