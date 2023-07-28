<!-- this is the layout for all Post pages -->

<div class="post">
	<aside>
		<h4>Posts</h4>

		<nav>
			<a href="/posts/one">One</a>

			<a href="/posts/two">Two</a>

			<a href="/posts/three">Three</a>
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
	.post {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px 60ch;
		margin-top: 2rem;
	}
</style>
